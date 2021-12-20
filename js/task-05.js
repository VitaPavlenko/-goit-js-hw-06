const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('#name-output');




function onInputChange(event) {
    if (inputEl.value  != "") {
        return spanEl.textContent = inputEl.value 
    }
    
    spanEl.textContent = "Anonymous";

}

inputEl.addEventListener('input', onInputChange);