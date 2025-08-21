//Selecting input fields
const nameValue = document.querySelector("#name-value")
const emailValue = document.querySelector("#email-value")
const pwdValue = document.querySelector("#pwd-value")
const phoneValue = document.querySelector("#phone-value")

// Selecting span for Err Msg
const nameErr = document.querySelector("#name-error")
const emailErr = document.querySelector("#email-error")
const pwdErr = document.querySelector("#pwd-error")
const phoneErr = document.querySelector("#phone-error")

// Selecting the button
const submitBtn = document.querySelector("#btn")

// Selecting the form.
const form = document.querySelector("form")

// Function to handler the nameValue field
function nameHandler(){
  let name = nameValue.value
  console.log(name);
  
  if(name.length === 0){
    submitBtn.disabled = true
    nameErr.textContent = "Name is Required!"
    return false
  }
  if(!name.match(/^[a-zA-Z]{3,}\s[a-zA-Z]{1,}$/)){
    submitBtn.disabled = true
    nameErr.textContent = "FullName is Required"
    return false
  }
  submitBtn.disabled = false
  nameErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`
  return true
}

// Adding event for name input field
nameValue.addEventListener("keyup", nameHandler)
nameValue.addEventListener("blur", nameHandler)

function emailHandler(){
  let email = emailValue.value
  console.log(email);
  
  if(email.length === 0){
    submitBtn.disabled = true
    emailErr.textContent = "Email is Required!"
    return false
  }
  if(!email.match(/^[a-z0-9]{3,}\@[a-z]{3,}\.[a-z]{2,}$/)){
    submitBtn.disabled = true
    emailErr.textContent = "Invalid Email!"
    return false
  }
  
  submitBtn.disabled = false
  emailErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`
  return true
}

emailValue.addEventListener("keyup", emailHandler)
emailValue.addEventListener("blur", emailHandler)

// Adding event for form
form.addEventListener("submit", (event)=>{
  event.preventDefault()

  if(!nameHandler() && !emailHandler()){    
    return false
  }
  
})