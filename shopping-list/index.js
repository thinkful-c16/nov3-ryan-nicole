/* global $ */
'use strict';

let STORE = [
  {item: 'Apples', isChecked: true},
  {item: 'Chips', isChecked: true},
  {item: 'Milk', isChecked: false}
];


function generateItem(item, itemIndex) {

  let itemChecked = item.isChecked === true ? 'shopping-item__checked' : '';

  return `
    <li class="js-item-index-element" data-item-index="${itemIndex}">
      <span class="shopping-item js-shopping-item ${itemChecked}">${item.item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
  `;
}

function handleItemSubmit() {
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();

    const itemName = $('.js-shopping-list-entry').val();
    STORE.push({item: itemName, isChecked: false});
    renderList();
  });
}

function renderList(){
  let itemsElements = STORE.map(
    function(item, index){
      return generateItem(item, index);
    });
  itemsElements = itemsElements.join('');
  $('.js-shopping-list').html(itemsElements);
}

function handleToggleItem() {
  $('.js-shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(event.target).closest('li').find('span.js-shopping-item').toggleClass('shopping-item__checked');
  });
}

function hideChecked() {
  $('#checkBox').on('change', function(event) {
    let checkBoxVal = $('input[type=checkbox]').prop('checked');
    if (checkBoxVal) {
      $('.js-shopping-list').find('span.shopping-item__checked').parent().toggleClass('hidden');
    }
    else {
      $('.js-shopping-list').find('span.shopping-item__checked').parent().toggleClass('hidden');
    }
  });
}

function handleDeleteItem() {
  $('.js-shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(event.target).closest('li').remove();
  });
}

function main() {
  handleItemSubmit();
  handleToggleItem();
  handleDeleteItem();
  hideChecked();
}

$(main);

