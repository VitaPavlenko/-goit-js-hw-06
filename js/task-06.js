
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);

const borderEl = (element1, element2) =>{
  inputEl.classList.remove(element1);
  inputEl.classList.remove(element2);
};


function onInputFocus() {
   
};

function onInputBlur(event) {

    if(inputEl.value.length === Number(inputEl.dataset.length))
    {
      borderEl('valid', 'invalid');
      
      inputEl.classList.add('valid');
      
       
      return;
      
    };

     borderEl('valid', 'invalid');
  
    inputEl.classList.add('invalid');
    
}

