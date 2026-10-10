const itemsLength = document.querySelectorAll('#categories .item');
const itemLength = itemsLength.length;
console.log(`Number of categories: ${itemLength}`);

itemsLength.forEach(item => {
  const title = item.querySelector('h2');
  const elements = item.querySelectorAll('ul li');
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
