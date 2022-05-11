const NAME_INPUT = "inputName";
const MAIL_INPUT = "inputMail";
const PHONE_INPUT = "inputPhone";
const EMPTY_STRING = "";
const MAIL_REGEX = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
const PHONE_REGEX = /^\d[\d\(\)\ -]{4,14}\d$/;
const FORM_BUTTON = "buttonGetStarted";
const SUCCESS_MESSAGE = "Форма успешно отправлена!";
const MESSAGE_TIME = 5000;
const MESSAGE_ID = "messageFormSended";

let userName = null;

function checkForm() {
    let nameValueFromForm = document.getElementById(NAME_INPUT).value;
    let mailValueFromForm = document.getElementById(MAIL_INPUT).value;
    let phoneValueFromForm = document.getElementById(PHONE_INPUT).value;

    function isValidateName(name) {
        return !(name.length === 0 || name.trim() === EMPTY_STRING);
    }

    function isValidateMail(mail) {
        return MAIL_REGEX.test(mail);
    }

    function isValidatePhone(phone) {
        return PHONE_REGEX.test(phone);
    }

    if (isValidateName(nameValueFromForm) && isValidateMail(mailValueFromForm) && isValidatePhone(phoneValueFromForm)) {
        document.getElementById(FORM_BUTTON).disabled = false;
        userName = nameValueFromForm;
    } else {
        document.getElementById(FORM_BUTTON).disabled = true;
    }
}

function clickForm() {

    if(document.getElementById(MESSAGE_ID) == null) {
        let message = document.createElement("div");
        message.textContent = SUCCESS_MESSAGE;
        message.style.color = "red";
        message.id = MESSAGE_ID;
        document.getElementById("mainHeading").appendChild(message);

        setTimeout(function () {
            message.hidden = true;
            location.reload();
        }, MESSAGE_TIME);

        document.cookie = `userName=${userName}`;
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

window.onload = function () {
    video = document.getElementById("videoPlayer");

    if (getCookie("userName") != null) {
        let userNameDiv = document.createElement("div");
        userNameDiv.textContent = getCookie("userName");
        userNameDiv.style.color = "white";
        userNameDiv.style.marginTop = "-15px";

        let icons = document.getElementById("icons");
        icons.insertBefore(userNameDiv, icons.firstChild);
        document.getElementById("mainForm").style.display = "none";
    }
}


