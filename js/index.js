let packages = [
  {
    recipientName: "John Doe",
    packageId: 123456,
    deliveryAddress: "123 Elm Street",
    weight: 2,
    trackingCode: "0b111101",
  },
  {
    recipientName: "Jane Doe",
    packageId: 123457,
    deliveryAddress: "456 Maple Lane",
    weight: 5,
    trackingCode: "0b111101",
  },
];

function generateTrackingCode(packageId, weight) {
  return "0b" + ((packageId << 4) | weight).toString(2);
}

function submitNewPackage(event) {
  event.preventDefault();
  const isValid = validateForm();
  if (!isValid) {
    return;
  }
}

function initErrorMessages(ids) {
  for (const id of ids) {
    const el = document.getElementById(id);
    el.textContent = "";
    el.classList.toggle("display-none", true);
  }
}

function validateForm() {
  const recipientName = document.getElementById("recipient-name").value;
  let isValid = true;

  initErrorMessages([
    "recipient-name-error",
    "package-id-error",
    "delivery-address-error",
    "weight-error",
  ]);

  const [isValidRecipientName, recipientNameErrorMessage] =
    validateRecipientName(recipientName);
  if (!isValidRecipientName) {
    displayValidationError("recipient-name-error", recipientNameErrorMessage);
    isValid = false;
  }

  const packageId = document.getElementById("package-id").value;
  const [isValidPackageID, packageIdErrorMessage] =
    validatePackageID(packageId);
  if (!isValidPackageID) {
    displayValidationError("package-id-error", packageIdErrorMessage);
    isValid = false;
  }

  const deliveryAddress = document.getElementById("delivery-address").value;
  const [isValidDeliveryAddress, deliveryAddressErrorMessage] =
    validateDeliveryAddress(deliveryAddress);
  if (!isValidDeliveryAddress) {
    displayValidationError(
      "delivery-address-error",
      deliveryAddressErrorMessage
    );
    isValid = false;
  }

  const weight = document.getElementById("weight").value;
  const [isValidWeight, weightErrorMessage] = validateWeight(weight);
  if (!isValidWeight) {
    displayValidationError("weight-error", weightErrorMessage);
    isValid = false;
  }

  return isValid;
}

function validateRecipientName(recipientName) {
  if (recipientName === "") {
    return [false, "This value is required. Please enter a name."];
  } else if (!/^[a-zA-Z\s]+$/.test(recipientName)) {
    return [false, "Recipient name must be a only alphabetic characters."];
  }
  return [true, ""];
}

function validatePackageID(packageId) {
  if (packageId === "") {
    return [false, "This value is required. Please enter a value."];
  } else if (!/^[0-9]+$/.test(packageId)) {
    return [false, "PackageID must be a only numeric value."];
  }

  return [true, ""];
}

function validateDeliveryAddress(deliveryAddress) {
  if (deliveryAddress === "") {
    return [false, "This value is required. Please enter a value."];
  } else if (!/[0-9]/.test(deliveryAddress)) {
    return [false, "Delivery address doesn't have have digits."];
  }
  return [true, ""];
}

function validateWeight(weight) {
  if (weight === "") {
    return [false, "This value is required. Please enter a value."];
  } else if (!/^[0-9]+$/.test(weight)) {
    return [false, "Weight must be a only numeric value."];
  } else if (Number(weight) < 1) {
    return [false, "Weight must be a positive value."];
  }
  return [true, ""];
}

function displayValidationError(errorMessageId, error) {
  const errorMessageElement = document.getElementById(errorMessageId);
  errorMessageElement.textContent = error;
  errorMessageElement.classList.toggle("display-none", false);
}

function main() {
  document
    .getElementById("add-package-form")
    .addEventListener("submit", submitNewPackage);
}

main();