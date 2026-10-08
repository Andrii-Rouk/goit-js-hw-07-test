'use strict';

const body = document.querySelector('body');
body.style.backgroundColor = '#fff';

const categories = document.querySelector('#categories');
categories.style.display = 'inline-flex';
// categories.style.boxSizing = 'border-box';
categories.style.width = '440px';
categories.style.margin = '0 auto';
categories.style.padding = '24px';
categories.style.gap = '24px';
categories.style.borderRadius = '8px';
categories.style.backgroundColor = '#fff';
categories.style.flexDirection = 'column';

const items = document.querySelectorAll('.item');
items.forEach(item => {
  Object.assign(item.style, {
    display: 'flex',
    padding: '16px',
    // boxSizing: 'border-box',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    borderRadius: '8px',
    backgroundColor: '#F6F6FE',
  });
});

const titles = document.querySelectorAll('h2');

titles.forEach(title => {
  title.classList.add('title');

  title.style.color = '#2E2F42';
  title.style.fontFamily = 'Montserrat';
  title.style.fontSize = '24px';
  title.style.fontStyle = 'normal';
  title.style.fontWeight = 600;
  title.style.lineHeight = '1.33';
  title.style.letterSpacing = '0.96px';
  title.style.width = '100%';
});

const itemsLast = document.querySelectorAll('.item ul');

itemsLast.forEach(itemLast => {
  itemLast.classList.add('item-last');
  Object.assign(itemLast.style, {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
  });
});

const itemsList = document.querySelectorAll('.item ul li');
itemsList.forEach(itemList => {
  itemList.classList.add('item-list');
  Object.assign(itemList.style, {
    width: '100%',
    // boxSizing: 'border-box',
    height: '40px',
    border: '1px solid #808080',
    borderRadius: '4px',
    padding: '8px 0 8px 16px',
  });
});

console.log('.item.style');
console.log(categories);
console.log(titles);
console.log(itemsLast);
console.log(itemsList);
