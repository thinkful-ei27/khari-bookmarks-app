/* global */
'use strict';

const store = (function(){
  const addItem = function(item){
    this.item.push(item);
  };

  const findById = function(id){
    return this.items.find(item => item.id === id);
  };

  return{
    items: [],
    minRating: 3,
    searchTerm: '',
    addItem,
    findById,


  };
}());