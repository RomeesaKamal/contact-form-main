const form = document.querySelector(".contactUs");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const textArea = document.querySelector("#message");
const consent = document.querySelector("#consent");
const queryType = document.getElementsByName("queryType");
const messageSuccess = document.querySelector("#msg");

// Indivisual error message elements for each field
const firstNameError = document.querySelector(".firstNameError");
const lastNameError = document.querySelector(".lastNameError");
const emailError = document.querySelector(".emailError");
const textAreaError = document.querySelector(".textAreaError");
const queryTypeError = document.querySelector(".queryTypeError");
const consentError = document.querySelector(".consentError");
const successMessage = document.querySelector(".successMessage");

function errorMessage() {
  let hasError = false; // Initialize flag for tracking errors
  // Validate First Name
  if (firstName.value.trim() === "") {
    firstNameError.textContent = "This field is required";
    firstNameError.style.color = "red";
    hasError = true;
  } else if (firstName.value.length < 3) {
    firstNameError.textContent = "First Name should at least 3 characters long";
    hasError = true;
  } else {
    firstNameError.textContent = "";
  }
  // Validate Last Name
  if (lastName.value.trim() === "") {
    lastNameError.textContent = "This field is required";
    lastNameError.style.color = "red";
    hasError = true;
  } else if (lastName.value.length < 3) {
    lastNameError.textContent = "Last Name should at least 3 characters long";
    hasError = true;
  } else {
    lastNameError.textContent = "";
  }

  // Validate Email
  if (email.value.trim() === "") {
    emailError.textContent = "This field is required";
    emailError.style.color = "red";
    hasError = true;
  } else if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email adress";
    emailError.style.color = "red";
    hasError = true;
  } else {
    emailError.textContent = "";
  }

  // Validate Query Type (radio type)
  let isQueryTypeSelected = false;
  for (const type of queryType) {
    if (type.checked) {
      isQueryTypeSelected = true;
      break;
    }
  }
  if (!isQueryTypeSelected) {
    queryTypeError.textContent = "This field is required";
    queryTypeError.style.color = "red";
    hasError = true;
  } else {
    queryTypeError.textContent = "";
  }

  // Validate Text Area

  if (textArea.value.trim() === "") {
    textAreaError.textContent = "This field is required";
    textAreaError.style.color = "red";
    hasError = true;
  } else if (textArea.value.trim().length < 10) {
    textAreaError.textContent = "Message should at least 10 characters long";
    textAreaError.style.color = "red";
    hasError = true;
  } else {
    textAreaError.textContent = "";
  }

  // Validate Consent Checkbox
  if (!consent.checked) {
    consentError.textContent =
      "To submit this form, please consent to being contacted";
    consentError.style.color = "red";
    hasError = true;
  } else {
    consentError.textContent = "";
  }
  return hasError;
}
// Change background color of selected radio button
queryType.forEach((radio) => {
  radio.addEventListener("input", () => {
    queryType.forEach((btn) => {
      btn.parentElement.style.backgroundColor = ""; // Reset color of all buttons
    });
    if (radio.checked) {
      radio.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)"; // Set color for selected button
    }
  });
});

// Add form submit event listner
form.addEventListener('submit', (e) => {
	e.preventDefault();
	// errorMessage();
	const hasError = errorMessage();
	// Show success message if no errors
	if (!hasError) {
		console.log('Form submitted successfully');
		messageSuccess.classList.remove('hide');
	} else {
		messageSuccess.classList.add('hide');
	}
});











