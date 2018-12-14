/* global $ */
'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/khari/bookmarks';

  //Read data from GET request to items
  const getItems = function(callback){
    $.getJSON(`${BASE_URL}`, callback);
  };

  //Create item with POST request
  const creatItems = function(name, callback){
    const newItem = JSON.stringify(
      {name: name}
    );
    $.ajax({
      'url':`${BASE_URL}`,
      'method': 'POST',
      'contentType': 'application/json',
      'data': newItem,
      'success': callback 
    });
  };

  //Update item with PATCH request
  const updateItems = function(id, updateData, callback){
    const newData = JSON.stringify(
      updateData
    );
    $.ajax({
      'url': `${BASE_URL}/${id}`,
      'method':'PATCH',
      'contentType': 'application/json',
      'data': newData,
      'success': callback
    });
  };

  //Delete item with DELETE request

  const deleteItem = function(id, callback){
    $.ajax({
      'url':`${BASE_URL}/${id}`,
      'method': 'DELETE',
      'success': callback,
    });
  };


  return{
    BASE_URL,
    getItems,
    creatItems,
    updateItems,
    deleteItem
  };
}());