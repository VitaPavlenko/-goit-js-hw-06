const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('#name-output');


inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (spanEl.textContent != "") {
        return spanEl.textContent = event.currentTarget.value
        
    }
    
    spanEl.textContent = "Anonymous";
}