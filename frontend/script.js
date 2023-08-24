// Newsletter email validation

let emailInput = document.querySelector(".email-input");
let emailP = document.querySelector(".email-p");
let submitButton = document.querySelector(".submit-button");

let output, checkLength, errorMsg, checkContent;

submitButton.disabled = true;
submitButton.style.opacity = 0.5;

// function to validate length of input
function validateInputLength(element, min, max)
{
    if ((element.value.length >= min) && (element.value.length <= max))
    {
        return true;
    }
    return false;
}
// function to validate content of input
function validateInputContent(element, checkLength, extraChars='')
{
    const pattern = new RegExp(`^[0-9${extraChars}]*$`);
    const isValid = pattern.test(element.value);

    if (checkLength && isValid)
    {
        element.style.borderColor = "green";
        return true;
    }
    element.style.borderColor = "red";
    return false;
}
// function to validate input field
function validateInputField(element, checkContent, errorMsg)
{
    if (checkContent)
    {
        element.innerHTML = "";
        return true;
    }
    element.innerHTML = errorMsg;
    element.style.color = "red";
    return false;
}

// validating email input
function validateEmailInput() 
{
    output = false;
    checkLength = validateInputLength(emailInput, 7, 100);
    errorMsg = "Email must a valid address, e.g. example@example.com";
    checkContent = validateInputContent(emailInput, checkLength, extraChars='a-zA-Z@.');

    if (validateInputField(emailP, checkContent, errorMsg))
    {
        output = true;
    }
    return (output);
}
emailInput.addEventListener("blur", () =>
{
    validateEmailInput();
});

function validateAllFields(btn)
{
    if (validateEmailInput())
    {
        btn.disabled = false;
        btn.style.opacity = 1;
        return (true);
    }
    btn.disabled = true;
    btn.style.opacity = 0.5;
    return (false);
}

document.body.addEventListener("click", () =>
{
    validateAllFields(submitButton);
});



// intergating backend and frontend
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("/getData");
        const data = await response.json();
        const messageContainer = document.getElementById("message");

        messageContainer.innerHTML = `<p>${data.message}</p>`;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

