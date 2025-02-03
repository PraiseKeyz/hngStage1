const express = require("express");
const cors = require("cors");
const axios = require("axios"); // We need axios to make HTTP requests
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/classify-number", async (req, res) => {
  try {
    // Get number from query and convert it to an integer
    const numberPar = Number(req.query.number);

    if (isNaN(numberPar)) {
      return res.status(400).json({ number: "alphabet", error: true });
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

    // Generating the fun fact using Numbers API
    try {
      const funFactResponse = await axios.get(
        `http://numbersapi.com/${numberPar}/math`
      );
      responseData.funFacts = funFactResponse.data;
    } catch (error) {
      console.error("Error fetching fun fact:", error);
      responseData.funFacts = "No fun fact available.";
    }

    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error getting data:", error);
    res.status(400).json({ error: "Something went wrong" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
