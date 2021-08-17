let addUserFormElement = document.getElementById("addUserForm");
let nameElement = document.getElementById("name");
let nameErrMsgElement = document.getElementById("nameErrMsg");
let phoneElement=document.getElementById("phone");
let phonelErrMsgElement=document.getElementById("phonelErrMsg");
let adressElement=document.getElementById("adress")
let adressErrMsgElement = document.getElementById("adressErrMsg");
nameElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgElement.textContent = "Required*";
    } else {
        nameErrMsgElement.textContent = ""
    }
});
adressElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
       adressErrMsgElement.textContent = "Required*";
    } else {
        adressErrMsgElement.textContent = ""
    }
});
phoneElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
       phonelErrMsgElement.textContent = "Required*";
    } else {
        phonelErrMsgElement.textContent = ""
    }
});
addUserFormElement.addEventListener("submit", function(event) {
    event.preventDefault();
});




