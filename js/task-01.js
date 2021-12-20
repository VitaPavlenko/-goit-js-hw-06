
const categoriesEl = document.querySelector('ul#categories');
const childrenLength = categoriesEl.children.length;
const childrenEl = [...categoriesEl.children];
console.log(`Number of categories: ${childrenLength }`);


childrenEl.forEach(elements => {
    console.log(`Category: ${elements.firstElementChild.textContent}`);
    console.log(`Elements: ${elements.lastElementChild.children.length}`);

});

