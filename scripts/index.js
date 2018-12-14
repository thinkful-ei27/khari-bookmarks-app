/* global $, api, bookmarks, store */
'use strict';

$(document).ready(function(){
  bookmarks.bindEventListeners();
  bookmarks.render();

  api.getItems((items) =>{
    console.log(items);
    items.forEach((item) => store.addItem(item));
    bookmarks.render();
  });
});