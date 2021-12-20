
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);



console.log(inputEl);

function onInputFocus() {
  console.log(`focus`);   
};


function onInputBlur(event) {

    if(event.currentTarget.value.length === Number(inputEl.dataset.length))
    {
       
      inputEl.classList.add('valid');
      inputEl.classList.toggle('invalid')
       
      return;
      
    };

    inputEl.classList.add('invalid');
    inputEl.classList.toggle('valid')
}

  console.log(inputEl); 