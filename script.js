const form = document.querySelector(".contactUs");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const textArea = document.querySelector("#message");
const error = document.querySelector(".error");

function errorMessage() {
  let errorMessage = "";
  const firstNameValue = firstName.value.trim();
  if (firstNameValue === "") {
    errorMessage += "This field is required";
  } else if (firstNameValue.length < 3) {
    errorMessage += "User FirstName should be at least 3 character long";
    console.log("bnm");
    if (errorMessage !== ""){
      error.innerHTML = `<span style = 'color:red;'>${errorMessage}</span>`;
 
    }
  }
    let errorText= "";
    const lastNameValue = lastName.value.trim();
    if (lastNameValue === "") {
      errorText += "This field is required";
    } else if (lastNameValue.length < 3) {
      errorText += "User lastName should be at least 3 character long";
      console.log("BBBB");
      if (errorText !== ""){
        error.innerHTML = `<span style = 'color:red;'>${errorText}</span>`;
     
      }
    }
  };


form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Button clicked");
  errorMessage();
});