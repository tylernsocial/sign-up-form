// DOM elements
const createBtn = document.querySelector('.subBtn');  // Selects the submit button element
const phone = document.querySelector("#phone");       // Selects the phone number input element
const password = document.querySelector("#password"); // Selects the password input element
const passConfirm = document.querySelector("#confirm-pass"); // Selects the password confirmation input element
const email = document.querySelector("#email");       // Selects the email input element
const error = document.getElementsByClassName('catch-error'); // Selects elements with class 'catch-error' for displaying error messages
const input = document.querySelectorAll('input');     // Selects all input elements
const over = document.querySelector('.over-container'); // Selects the overlay container element
const thanksPage = document.querySelector('.ty-page');   // Selects the thank you page element

let bypass = 0; // Counter to track successful validations

/**
 * Validate function
 * 
 * @param {HTMLElement} current - The error message element to update
 * @param {string} messageString - The error message to display
 * @param {number} booleanTest - A validation result: 1 if valid, 0 if not valid
 */
function validate(current, messageString, booleanTest) {
    let message = current;
    message.textContent = messageString; // Set the error message
    if (booleanTest !== 0) {
        bypass++; // Increment the counter if validation passes
    }
}

// Add event listeners to input fields for basic validation
for (let i = 0; i < input.length; i++) {
    let currentInputField = input[i];
    let currentErrorDisplayer = error[i];
    
    currentInputField.addEventListener('keyup', (e) => {
        const errorMessage = e.target.value !== "" ? '' : '*This field is Required';
        validate(currentErrorDisplayer, errorMessage, 0); // Validate and update error message
    });
}

// Validate phone number input
phone.addEventListener('keyup', (e) => {
    const message = error[3];
    const cleanPhoneNumber = e.target.value.replace(/\D/g, '');
    const isPhoneNumberValid = e.target.value === cleanPhoneNumber;
    const errorMessage = isPhoneNumberValid ? '' : '*Please enter a valid number';
    validate(message, errorMessage, isPhoneNumberValid ? 1 : 0);
});

// Validate email input
email.addEventListener('keyup', (e) => {
    const message = error[2];
    const isEmailValid = e.target.value.includes('@') && (e.target.value.includes('.com') || e.target.value.includes('.ca'));
    const errorMessage = isEmailValid ? '' : '*Please provide a valid Email';
    validate(message, errorMessage, isEmailValid ? 1 : 0);
});

// Validate password input
password.addEventListener('keyup', (e) => {
    const message = error[4];
    const isPasswordValid = e.target.value.length >= 8;
    const errorMessage = isPasswordValid ? '' : 'Password requires a minimum of 8 characters';
    validate(message, errorMessage, isPasswordValid ? 1 : 0);
});

// Validate password confirmation
passConfirm.addEventListener('keyup', (e) => {
    const message = error[5];
    const isPasswordMatching = password.value === e.target.value;
    const errorMessage = isPasswordMatching ? '' : '*Password did not match';
    validate(message, errorMessage, isPasswordMatching ? 1 : 0);
});

// Handle form submission
createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (bypass > 8) {
        over.style.display = 'none'; // Hide overlay container
        thanksPage.classList.remove('toggle'); // Show thank you page
    } else {
        for (let i = 0; i < error.length; i++) {
            error[i].textContent = '*This field is Required'; // Display error messages
        }
    }
});
