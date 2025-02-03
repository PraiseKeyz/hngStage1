const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/classify-number", (req, res) => {
  try {
    // Get number from query and convert it to an integer
    const numberPar = Number(req.query.number);

    if (isNaN(numberPar)) {
      return res.status(400).json({
        number: numberPar,
        error: true
      });
    }

    // Function to check if a number is prime
    const ifIsPrime = (number) => {
      if (number <= 1) return false;
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    };

    // Function to check if a number is perfect
    const ifIsPerfect = (number) => {
      let sumDivisors = 0;
      for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) sumDivisors += i;
      }
      return sumDivisors === number;
    };

    // Function to check if a number is an Armstrong number
    const isArmstrong = (number) => {
      const digits = number.toString().split("");
      const numDigits = digits.length;
      const sum = digits.reduce(
        (acc, digit) => acc + Math.pow(Number(digit), numDigits),
        0
      );
      return sum === number;
    };

    // Function to check if a number is odd or even
    const odd = (number) => {
      return number % 2 !== 0 ? "odd" : "even";
    };

    // Function to get the sum of digits of a number
    const sumOfDigits = (number) => {
      return number
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);
    };

    const funFacts = [];

    // Constructing the response
    const responseData = {
      number: numberPar,
      isPrime: ifIsPrime(numberPar),
      isPerfect: ifIsPerfect(numberPar),
      properties: [], // Properties as an array
      digitSum: sumOfDigits(numberPar),
      funFacts: "",
    };

    // Adding properties to the array
    if (isArmstrong(numberPar)) {
      responseData.properties.push("armstrong");
    }
    responseData.properties.push(odd(numberPar) === "odd" ? "odd" : "even");


    // Generating fun facts based on the properties
    if (isArmstrong(numberPar)) {
      funFacts.push(
        `${numberPar} is an Armstrong number because the sum of its digits raised to the power of ${numberPar
          .toString()
          .length} equals ${numberPar}.`
      );
    }
    if (responseData.isPrime) {
      funFacts.push(
        `${numberPar} is a prime number because it is only divisible by 1 and itself.`
      );
    }
    if (responseData.isPerfect) {
      funFacts.push(
        `${numberPar} is a perfect number because the sum of its proper divisors equals itself.`
      );
    }
    funFacts.push(`${numberPar} is an ${odd(numberPar)} number.`);
    responseData.funFacts = funFacts.join(" ");

    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error getting data:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
