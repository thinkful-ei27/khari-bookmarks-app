/*global cuid*/
'use strict';



const Item = (function(){

  /*const validateName = function(name){
      if(!name) throw new TypeError('Name must not be blank');
  };*/

  const create = function(name, rating){
    return{
      id: cuid(),
      name,
      rating,
      expanded: false,
      url: '',
      description: ''
    };
  };

  return{
    create,
  };
}());