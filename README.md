# IST103 Final Exam
This is JSville Courier Management System.
Users can add a package and track their packages.

## Required
- VSCode
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Get Started

- Open the project with VSCode
- Start Live Server on the project root.
- access the localhost address on your browser.

```
$ git clone https://github.com/t-yng/cctb-ist103-fina-exam.git
$ cd cctb-ist107-fina-exam
$ vscode .
```

## Package Data Entry:
Allow users to input package details including:

- Recipient Name: This field should contain alphabetic characters only (e.g., no numbers or special characters).
- Package ID: A numeric-only field that ensures the ID is an integer. Reject non-numeric inputs (e.g., alphanumeric values or empty fields).
- Delivery Address: A string that should not be empty. You can add a simple validation to check for a non-empty string and reject it if it contains invalid characters (e.g., check that it doesn’t contain digits).
- Weight: This field should only accept positive numeric values (in kilograms). Reject any input that is not a valid number or is less than or equal to 0 (e.g., negative values, text, or empty fields).

### Validation Process:
- Reject missing fields or empty entries.
- Ensure numeric-only input for Package ID and Weight.
- Display an error message for invalid input (e.g., "Error: Invalid Package ID. Please enter numeric values only.").
