/*global api, store, $ */
'use strict';

const bookMarks = (function(){


  function generateItemElement(item){
    const expandedItem = item.expanded ? 'bookmark-item__expanded' : '';

    let itemTitle = `<span class="bookmark-item ${expandedItem}">${item.name}</span>`;
    if (item.expanded){
      itemTitle = `
        <form class="bookmark-discription">
          <textarea rows="4" cols="50">${item.description}</textarea>
          
      `
    }
    
  }

  function generateBookmarksString(bookmarks){
    const items = bookmarks.map((item) => generateItemElement(item));
    return items.join('');
  }

  function render(){ 
    let items = [];
    store.minRating = $('.min-rating').val();
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


//Will bring up a popup form('js-bookmark-form) for user to fill out and add item to store
  function handleAddBookmark(){
    
  }


//on click, bookmark must expand to reveal URL, longer description, and the buttons "Edit" and "Delete"   
  function handleExpandItem(item){
    //minimize all items and keep only ONE expanded at a time
    store.items.forEach(item => item.expanded = false);
    getItemFromElement(item).expanded = true;
  }

  function handleNewItemSubmit(){
    $('js-bookmark-form').submit(function (event){
      event.preventDefault();
      const formData = new FormData(this[0]);
      const obj ={};
      formData.forEach((val, key)=>{
        obj[key]=val;
        api.createItem(formData, (newItem)=>{
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
//if only one is expanded at a time then DELETE could just always target expanded item?
  }

  function handleFilterRating(){
    store.adjustRatingFilter($('.min-rating').val());
  }

  function bindEventListeners(){
    handleAddBookmark();
    handleDeleteItemClicked();
    handleFilterRating();
    handleNewItemSubmit();
    handleExpandItem();
  }


  return{
    render: render,
    bindEventListeners: bindEventListeners,
  };

}());