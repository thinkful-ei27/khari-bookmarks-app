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
      if(item.rating >= store.minRating){
        items.push(item);
      }});

    if(store.searchTerm){
      items = items.filter(item => item.name.includes(store.searchTerm));
    }

    
    //rending bookmarks into the dom
    const bookmarkString = generateBookmarksString(items);
    //insert HTML into the DOM
    $('.js-bookmark-list').html(bookmarkString);
  }




  function handleNewItemSubmit(){
    $('js-bookmark-form').submit(function (event){
      event.preventDefault();
      const formData = new FormData(this[0]);
      const obj ={};
      formData.forEach((val, key)=>{
        obj[key]=val;
        applicationCache.createItem(formData, (newItem)=>{
          store.addItem(newItem);
          render();
        });
      });
    });

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