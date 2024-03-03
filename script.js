
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

let emailValidation = false;
let passwordValidation = false;


function validateEmail(){
  
    const email = emailField.value;
    console.log(email);

    const emailValidationDiv = document.getElementById('wrongEmail');
    console.log("validation of email");
    
    if(email.length >= 3 && email.includes('@') && email.includes('.'))
    {
        emailValidationDiv.classList.add('correctEmail');
        emailValidation = true;
    }else{
        console.log('wrong');
        emailValidationDiv.classList.add('wrongEmail');
        emailValidation = false;
    }
}

function validatePassword(){
    const password = passwordField.value;

    console.log(typeof(password));
    if(password.length > 8){
        const passwordValidationDiv = document.getElementById('wrongPassword');
         passwordValidation = true;
         passwordValidationDiv.classList.add('correctPassword');

    }else{
        passwordValidation = false;
    }
}

function implementSubmit(){
    const allChecked = document.getElementById('submission');
    if(emailValidation && passwordValidation){
        alert('Successful Signup!');
        allChecked.innerText = 'All good to go!';
    }else{
        alert('something is wrong');
        allChecked.innerText = '';
        window.location.href = "#";
    }
}


