function add(fn){
  var counter = 0;
  var result;
  var f = fn;

    result = function(a,b){
      counter === 0 ? (counter++, result = f(a,b)) : null;
      return result;
  }
 return result;
}

function fn(a,b){
 return a+b;
}

const onceAdd = add(fn);
console.log("onceAdd "+onceAdd(1,2));
console.log("onceAdd "+onceAdd(2,2));
