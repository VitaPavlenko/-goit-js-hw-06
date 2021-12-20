
const categoriesEl = document.querySelector('ul#categories');
const childrenEl = categoriesEl.children;

console.log(`Number of categories: ${childrenEl.length}`);

const firstChildEl = categoriesEl.firstElementChild;

console.log(`Category: ${firstChildEl.firstElementChild.textContent}`);

const firstItemEl = firstChildEl.children[1];
console.log(`Elements: ${firstItemEl.children.length}`);


const secondChildEl = categoriesEl.children[1];
console.log(`Category: ${secondChildEl.firstElementChild.textContent}`);

const secondItemEl = secondChildEl.children[1];
console.log(`Elements: ${secondItemEl.children.length}`);

const lastChildEl = categoriesEl.lastElementChild;
console.log(`Category: ${lastChildEl.firstElementChild.textContent}`);

const lastItemEl = lastChildEl.children[1];
console.log(`Elements: ${lastItemEl.children.length}`);