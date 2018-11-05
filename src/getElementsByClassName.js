// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodes = [];
  
  var element = document.body;
  // console.log(`this is document body`, document.body)
  
  var getClasses = function(element){
    
    if (element.classList && element.classList.contains(className)){
      nodes.push(element);
    }
    
    if (element.childNodes){
      element.childNodes.forEach(function(item){
        getClasses(item);
      });
    }
  };
  
  getClasses(element);
  return nodes;
};


//You should use document.body, element.childNodes, and element.classList
