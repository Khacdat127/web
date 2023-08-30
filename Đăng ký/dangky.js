const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const gender1 = document.getElementById('gender1');
const gender2 = document.getElementById('gender2');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const note = document.getElementById('note');

var checkusername = true;
var checkemail = true
var checkgender = true
var checkphone = true
var checkpassword = true
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkGender(gender1, gender2)
    checkPasswordMatch(password, password2);
    ValidatePhoneNumber(phone);
    getEntersCount(note)

    console.log(checkusername, checkemail, checkgender, checkphone, checkpassword)

    if (checkusername, checkemail, checkgender, checkphone, checkpassword) {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": username.value,
            "email": email.value,
            "gender": document.querySelector('input[name="gender"]:checked').value,
            "phone": phone.value,
            "password": password.value,
            "note": note.value
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/php/api/createuser/createuser.php", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (alert('Create user successfull!')) {
                    window.location.reload();
                }
                else window.location.reload();
            })
            .catch(error => {
                if (alert('Create user successfull!')) {
                    window.location.reload();
                }
                else window.location.reload();
            });
    }
});
//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function getEntersCount(textarea) {
    var count = textarea.value.length;
    if (count > 200) {
        showError(note, '200 words');

    }
}

function ValidatePhoneNumber(phone) {
    if (/[- +()0-9]+/g.test(phone) && phone.value) {
        showSucces(phone)
        checkphone = true
    }
    else if (phone.value === "") {
        showError(phone, 'Phone is not invalid');
        checkphone = false
    }
    else {
        showError(phone, 'Phone is not invalid');
        checkphone = false
    }
}
//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function checkGender(input1, input2) {
    if (!input1.checked && !input2.checked) {
        showError(gender2, 'Please select your gender type ');
        checkgender = false

    }
    else {
        showSucces(gender2)
        checkgender = true

    }
}
//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucces(input)
        checkemail = true
    } else {
        showError(input, 'Email is not invalid');
        checkemail = false

    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
            checkusername = false,
                checkemail = false,
                checkgender = false,
                checkphone = false,
                checkpassword = false
        }
    });
}


//check input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        checkusername = false

    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
        checkusername = false

    } else {
        showSucces(input);
        checkusername = true

    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
        checkpassword = false
    }

    else if (input1.value === "" || input2.value === "") {
        checkpassword = false

    }
    else {
        checkpassword = true
    }
}


