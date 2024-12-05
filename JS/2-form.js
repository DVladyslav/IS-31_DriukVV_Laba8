let formData = {
    email: "",
    message: ""
};

let feedbackForm = document.querySelector(".feedback-form");
feedbackForm.addEventListener("input", storeInputData);

function storeInputData(event) {
    let targetElem = event.target;
    let inputEmail = document.querySelector(".feedback-form input[type='email']");
    let inputMessage = document.querySelector(".feedback-form textarea[name='message']");

    if (targetElem === inputEmail) {
        formData.email = inputEmail.value.trim();
        formData.message = inputMessage.value.trim();
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    console.log(localStorage.getItem("feedback-form-state"));
}

feedbackForm.addEventListener("submit", submitInputtData);
function submitInputtData(event) {
    event.preventDefault();
    let formElements = feedbackForm.elements;
    let userEmail = formElements["email"].value.trim();
    let userMessage = formElements["message"].value.trim();
    if (userEmail === "" || userMessage === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.clear();
        formData.email = "";
        formData.message = "";
        feedbackForm.reset();
    }
}

window.addEventListener("load", loadFormData);

function loadFormData() {
    let savedData = localStorage.getItem("feedback-form-state");
    if (savedData){
        //localStorage.clear();
        let userData = JSON.parse(savedData);
        let emailField = document.querySelector(".feedback-form input[type='email']");
        let messageField = document.querySelector(".feedback-form textarea[name='message']");
        emailField.value = userData.email;
        messageField.value = userData.message;
        formData.email = userData.email;
        formData.message = userData.message;
    }
}
