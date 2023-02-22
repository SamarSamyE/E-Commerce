const form = document.getElementById('form');
const fname = document.getElementById('Firstname');
const lname = document.getElementById('Lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const address = document.getElementById('address');
const password2 = document.getElementById('password2');
let lenghtErr= emailErr= addressErr =passwordMErr = requiredErr= false;

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    emailErr=true;
  } else {
    showError(input, 'Email is not valid');
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
      requiredErr =true;
    }
  });
}

//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
    lenghtErr =true;
  }
}

//check address

function checkaddress(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
    addressErr =true
return true;

}
else
{
  showError(uadd, 'address is not valid');
uadd.focus();
return false;
}
}


// check passwords match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
  else{
    passwordMErr = true
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([fname,lname, email,address, password, password2]);
  checkLength(fname, 3, 15);
  checkLength(lname, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkaddress(address);
  checkPasswordsMatch(password, password2);
  if((requiredErr && passwordMErr && addressErr && lenghtErr && emailErr)===true){
    window.location.href="../index.html"
  }
});