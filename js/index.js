let toggle = document.querySelector('.toggle');
let container = document.querySelector('.container');
let main = document.querySelector('.main');
let list = document.querySelectorAll('.container li');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));

toggle.onclick = function() {
    container.classList.toggle('active');
    main.classList.toggle('active');
}





const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }


    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Password does not match');
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const fromControl = input.parentElement;
    const small = fromControl.querySelector('small');



    small.innerText = message;

    fromControl.className = 'form-control error';

}

function setSuccessFor(input) {
    const fromControl = input.parentElement;
    fromControl.className = 'form-control success';
}

function isEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$(document).ready(function() {

    $("a").click(function(event) {
        $("html,body").animate({
                scrollTop: $($.attr(this, "href")).offset().top,
            },
            700
        );
        event.preventDefault();
    });


});

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;