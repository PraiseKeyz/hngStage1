# Number Classifier API

This is a simple Node.js API that classifies a given number and provides interesting facts about it. The API checks whether the number is prime, perfect, Armstrong, and whether it's odd or even. Additionally, it calculates the sum of the digits of the number and returns fun facts based on the properties of the number.

## Features

- **Prime Check**: Determines if the number is a prime number.
- **Perfect Number Check**: Checks if the number is a perfect number (sum of proper divisors equals the number).
- **Armstrong Number Check**: Determines if the number is an Armstrong number (sum of digits raised to the power of the number of digits equals the number).
- **Odd or Even Check**: Determines if the number is odd or even.
- **Sum of Digits**: Calculates the sum of the digits of the number.
- **Fun Facts**: Returns fun facts about the number based on the checks above.

## Installation

To get started with the project, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/PraiseKeyz/hngStage1
```

2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node server.js
   ```
   The server will start on `http://localhost:3000` by default.

## API Documentation

### Endpoint: Get API Response
- URL: `/api/classify-number?number=<number>`
- Method: `GET`
- Response Format: `JSON`
- Example Request: `/api/classify-number?number=153`
- Example Response:
  ```json
  {
  "number": 153,
  "isPrime": false,
  "isPerfect": false,
  "properties": ["armstrong", "odd"],
  "digitSum": 9,
  "funFacts": "153 is an Armstrong number because the sum of its digits raised to the power of 3 equals 153. 153 is an odd number."
  }
  ```
### Parameters
- number: The integer number to classify (required).

###  Response
- number: The input number.
- isPrime: A boolean indicating if the number is prime.
- isPerfect: A boolean indicating if the number is perfect.
- properties: An array of the properties of the number (e.g., 'armstrong', 'odd').
- digitSum: The sum of the digits of the number.
- funFacts: A string containing fun facts about the number.

### Deployment

To deploy this API on a platform like Render, Railway, or Heroku:
1. Push the project to a GitHub repository.
2. Connect the repository to your chosen deployment service.
3. Set up environment variables if needed.
4. Deploy and obtain your live API URL.

### Technologies Used
- Node.js
- Express.js
- CORS

### Contribution
Feel free to fork the repository, submit issues, or create pull requests to contribute to the project.

### License
This project is open-source and available under the MIT License.

### Author
Developed by Praisekeyz https://github.com/PraiseKeyz.

