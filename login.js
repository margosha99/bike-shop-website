const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById('password');
const repassInput = document.getElementById('repass');


function validateName(){

  let valid = false;
  const min = 3;
  const max = 25;

  const nameValue = nameInput.value.trim();

  if(!isRequired(nameValue)){
    setErrorMessage(nameInput, 'Username cannot be blank.')
  }else if(!isBetween(nameInput.length, min,max)){
    setErrorMessage(nameInput, `Username must be between ${min} and ${max} characters.`);
  }else{
    setSuccessFor(nameInput)
    valid = true;
  }
  return valid;
}

function validateEmail(){
  let valid = false;

  const emailValue = emailInput.value.trim();
  const regEmail = /^[a-zA-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  if(!isRequired(emailValue)){
    setErrorMessage(emailInput, 'Email cannot be blank')
  }else if(!regEmail.test(emailValue)){
    setErrorMessage(emailInput, 'Email is not valid');
  }else{
    setSuccessFor(emailInput);
    valid = true;
  }
  return valid;
}

function validatePassword(){

  let valid = false;
  const passwordValue = passwordInput.value.trim();
  
  const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if(!isRequired(passwordValue)){
    setErrorMessage(passwordInput, 'Password cannot be blank');
  }else if(!regPassword.test(passwordValue)){
    setErrorMessage(passwordInput, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number');
  }else{
    setSuccessFor(passwordInput);
    valid = true;
  }
  return valid;
}

function validateRepas(){
  let valid = false;

  const repassValue = repassInput.value.trim();
  const password = passwordInput.value.trim();

  if(!isRequired(repassValue)){
    setErrorMessage(repassInput, 'Please enter the password again');
  }else if(repassValue !== password){
      setErrorMessage(repassInput, 'Confirm password does not match');
  }else{
      setSuccessFor(repassInput);
      valid = true;
    }
  return valid;
}

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

function setSuccessFor(input){
  const formGroup = input.parentElement;

  formGroup.classList.remove('error');
  formGroup.classList.add('success');

  const error = formGroup.querySelector("small");

  error.textContent = '';
}

function setErrorMessage(input,message){
  const formGroup = input.parentElement;
  formGroup.classList.remove('success');
  formGroup.classList.add('error');

  const error = formGroup.querySelector("small");

  error.innerText = message;
}

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  
  let isNameValid = validateName(),
      isEmailValid = validateEmail(),
      isPasswordValid = validatePassword(),
      isRepassValid = validateRepas();
  
  let isFromValid = isNameValid &&  isEmailValid && 
                    isPasswordValid && isRepassValid;

  if(isFromValid){
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const repassValue = repassInput.value;

    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('password', passwordValue);
    localStorage.setItem('repass', repassValue);


    console.log('Local storage');
    for(let i =0; i < localStorage.length; i++){
      console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i))+ "]");
    }

  }
  
  return false;
});



function checkLoginState() {
    FB.login(function(response) {
      statusChangeCallback(response);
    });
}


function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    // console.log('statusChangeCallback');
    // console.log(response);                   // The current login status of the person.
    
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }

    console.log('Session storage');
    let responseObj = response.authResponse;
    
    Object.entries(responseObj).forEach(entry => {
        const [key,value] = entry;
        sessionStorage.setItem(key,value);
    });

    for (let i = 0; i < sessionStorage.length; i++) {
      console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
    }
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '743663706234587',
      cookie     : true,
      xfbml      : true,
      version    : 'v9.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    // FB.api('/me', function(response) {
    //   console.log('Successful login for: ' + response.name);
    
    // });
  }