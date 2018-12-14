/* global $*/
'use strict';

const store = (function(){
  const addItem = function(item){
    this.items.push(item);
  };

  const findById = function(id){
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id){
    this.items = this.items.filter(item => item.id !== id);
  };

  const adjustRatingFilter = function(newMin){
    //revisit
    this.minRating = newMin;
  };

  const findAndUpdate = function (id, newData){
    const item = this.findById(id);
    Object.assign(item, newData);
  };

  const setItemIsEditing = function(id, isEditing){
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term){
    this.searchTerm = term;
  };

  return{
    items: [],
    minRating: 3,
    searchTerm: '',
    addItem,
    findById,
    findAndDelete,
    adjustRatingFilter,
    findAndUpdate,
    setItemIsEditing,
    setSearchTerm
  };
}());