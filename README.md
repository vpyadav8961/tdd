String Calculator TDD 
A simple implementation of the String Calculator using Test-Driven Development (TDD) in TypeScript.

🚀 Features
Returns the sum of numbers in a string.

Handles:
Empty strings and whitespace.
Single numbers.

🧰 Prerequisites
Node.js (used Node.js 18.17.0)
npm

🛠️ Setup
Clone the repository:
git clone https://github.com/vpyadav8961/tdd.git

cd TDD
Install dependencies:
npm install

Run tests:
npm test

🧪 Testing
The project uses Jest for testing. Test cases cover:

Empty strings (e.g., "").
Single numbers (e.g., "5").

📚 Example Usage
import { add } from "./stringCalculator";

console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1

📦 Project Structure
src/
  ├── stringCalculator.ts         # Implementation of the `add` function
  ├── stringCalculator.test.ts    # Jest test cases for the `add` function
jest.config.js              # Jest configuration
tsconfig.json               # TypeScript configuration

🛠️ Development
Add a New Test
Open src/stringCalculator.test.ts.
Add a new test case using the Jest framework.
Run npm test to validate your implementation.
