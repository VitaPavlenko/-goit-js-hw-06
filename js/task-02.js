const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const markup = [];
  ingredients.map(ingredient => {
const li1El = document.createElement('li')
  li1El.textContent = ingredient;
  li1El.classList.add('item')

  markup.push(li1El);

    return markup;
} ); 
ingredientsEl.append(...markup);
 console.log(ingredientsEl);

