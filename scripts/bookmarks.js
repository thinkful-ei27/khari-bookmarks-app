/*global api, store, $ */
'use strict';

const bookMarks = (function(){
  function generateItemElement(item){
    const expandedItem = item.Expanded ? 'bookmark-item__expanded' : '';

    let itemTitle = 'This is placeholder for item HTML';
  }

  function generateBookmarksString(bookmarks){
    const items = bookmarks.map((item) => generateItemElement(item));
    return items.join('');
  }

  function render(){ 
    let items = [];
    store.items.forEach(item=> {
      if(item.rating >= minRating){
        items.push(item);
      }});

    if(store.searchTerm){
      items = items.filter(item => item.name.includes(store.searchTerm));
    }

    

    const bookmarkString = generateBookmarksString(items);

    $('.js-bookmark-list').html(bookmarkString);
  }

  function handleNewItemSubmit(){

  }

  function getItemFromElement(item){
    return $(item)
      .closest('.js-item-element')
      .data('item-id');
  }

  function handleDeleteItemClicked(){

  }

  function handleFilterRating(){

  }



}());