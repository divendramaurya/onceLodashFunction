function add(fn){
  var counter = 0;
 // console.log('counter 1 '+counter);
  var result;
  var f = fn;

    result = function(a,b){
    //  console.log('Inside');
      //console.log('counter 2 '+counter);
     if(counter === 0){
      counter++;
 result = f(a,b);
     //  console.log('counter 3 '+counter);
    }
      return result;
  }

  return result;
}

function fn(a,b){
  // console.log(a,b);
 return a+b;

}

const onceAdd = add(fn);
console.log("onceAdd "+onceAdd(1,2));
console.log("onceAdd "+onceAdd(2,2));



