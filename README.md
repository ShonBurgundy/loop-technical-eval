# Playwright Test Suite for Asana
This repository contains automated end-to-end tests for Asana using Playwright. These tests are designed to verify specific functionalities and behaviors of Asana’s web application.

## Prerequisites
Before running the tests, ensure you have the following installed:

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Installation
1. Clone this repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
```

## Running Tests
To execute the tests, use the following command:

```bash
npx playwright test
```
This command will run all test cases defined in the tests direcory.

## Test Structure
The test suite (`tests/asana.spec.js`) is structured as follows:

- **Login:** Before each test case, the script logs into Asana using provided credentials.

- **Navigation:** Each test case navigates to a specific project page within Asana.

- **Verification:** It verifies that the expected card is present in the specified column.

## Troubleshooting
If tests fail due to timeouts or unexpected behavior, ensure that your environment has stable internet connectivity and that Asana’s service is operational.
Check the console output for any error messages that might provide clues about the issue.

## <font color="red">Note</font>
An extended test timeout has been configured to accommodate the slower performance of my aging machine.

### Contributors
Sean VanLeeuwen

### License
This project is licensed under the MIT License.

