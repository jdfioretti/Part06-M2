var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  /* if (typeof startEl === "undefined") {
    startEl = document.body;
  } */

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if(matchFunc(startEl)) resultSet.push(startEl);

  for(let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet, ...result];
  }
  return resultSet;

};  
  // TU CÓDIGO AQUÍ
  



// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

/// selector--> si es .nombre = class, #nombre = id, div.nombreDeClase = tag.class, div = o class


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  
  //Bryan
  /* if(selector[0] === '#') return 'id';
  else if(selector[0] === '.') return 'class';
  else if(selector.split('.').length === 2) return 'tag.class';
  else return 'tag'; */
  
  // modo ES6 (Ternario)
  return selector[0] === '.' ? 'class' : selector[0] === '#' ? 'id' : selector.includes('.') ? 'tag.class' : 'tag';
  
  //Fede
  /* for(let i = 0; i < selector.length; i++) {
    if(selector[i] === '.') return 'tag.class';  */ 
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  
  if (selectorType === "id") { 
    matchFunction = function(elem){
      return '#' + elem.id === selector;
    }
    //ES6

    // matchFunction === (elem) => `#${elem.id}` === selector;

  } else if (selectorType === "class") {
    matchFunction = function(elem) {
      for(let i = 0; i < elem.classList.length; i++){
        if('.' + elem.classList[i] === selector) return true;
      }
      return false;
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = function(elem){
      let [t, c] = selector.split('.');

      return matchFunctionMaker(t)(elem) && matchFunctionMaker('.' + c)(elem);
    }
    
  } else if (selectorType === "tag") {
    matchFunction = function(elem) {
      return elem.tagName === selector.toUpperCase();
    }
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
