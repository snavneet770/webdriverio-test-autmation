# QA Assignment

This project implements test scenarios for:  
1. Accessing a product via category after applying multiple filters.
2. Access a product and via Seach

It uses Cucumber for behavior-driven development (BDD) and tests the functionality of a web application.

## Getting Started
To get started with this project, follow the steps below:

1. Clone the repository to your local machine.
2. Install the necessary dependencies.
3. Open the project in your preferred IDE (e.g., Visual Studio Code).
4. Run the tests to verify the functionality.

## Prerequisites
Make sure you have the following software installed on your machine:

- Node.js
- npm (Node Package Manager)

## Installing Dependencies

To install the project dependencies, navigate to the project directory in your terminal and run the following command:

```
npm install
```

This will install all the required packages specified in the ```package.json``` file.

## Running the Tests

To run the tests, use the following command:
```
npx wdio run ./wdio.conf.js
```

This will executed both test sceanrios
```
npx wdio --spec features/product.search.feature
```

This will execute sceanrios from the specified feature file