const createBtn = document.querySelector('.subBtn');
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const passConfirm = document.querySelector("#confirm-pass");
const email = document.querySelector("#email");
const error = document.getElementsByClassName('catch-error');
const input = document.querySelectorAll('input');
const over = document.querySelector('.over-container');
const thanksPage = document.querySelector('.ty-page'); 
let bypass = 0;
function validate(current, messageString, booleanTest) {
    let message = current;
    message.textContent = messageString;
    if (booleanTest !== 0) {
        bypass++;
    }
}
for (let i = 0; i < input.length; i++) {
    let currentInputField = input[i];
    let currentErrorDisplayer = error[i];
    console.log(bypass)
    currentInputField.addEventListener('keyup', (e) => {
        const errorMessage = e.target.value !== "" ? '' : '*This field is Required';
        validate(currentErrorDisplayer, errorMessage, 0);
    });
}
phone.addEventListener('keyup', (e) => {
    const message = error[3];
    const cleanPhoneNumber = e.target.value.replace(/\D/g, '');
    const isPhoneNumberValid = e.target.value === cleanPhoneNumber;
    const errorMessage = isPhoneNumberValid ? '' : '*Please enter a valid number';
    validate(message, errorMessage, isPhoneNumberValid ? 1 : 0);
    console.log(bypass)
});


email.addEventListener('keyup', (e) => {
    const message = error[2];
    const isEmailValid = e.target.value.includes('@') && (e.target.value.includes('.com') || e.target.value.includes('.ca'));
    const errorMessage = isEmailValid ? '' : '*Please provide a valid Email';
    validate(message, errorMessage, isEmailValid ? 1 : 0);
    console.log(bypass)
});


password.addEventListener('keyup', (e) => {
    const message = error[4];
    const isPasswordValid = e.target.value.length >= 8;
    const errorMessage = isPasswordValid ? '' : 'Password requires a minimum of 8 characters';
    validate(message, errorMessage, isPasswordValid ? 1 : 0);
    console.log(bypass)
});

passConfirm.addEventListener('keyup', (e) => {
    const message = error[5];
    const isPasswordMatching = password.value === e.target.value;
    const errorMessage = isPasswordMatching ? '' : '*Password did not match';
    validate(message, errorMessage, isPasswordMatching ? 1 : 0);
    console.log(bypass)
});

createBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(bypass > 8){
        over.style.display = 'none'
        thanksPage.classList.remove('toggle')
    }
    else{
        for(let i=0; i<error.length; i++){
            error[i].textContent = '*This field is Required'
        }
    }
})


