function receivesAFunction(callback){
    return callback();
}
/*you const spy = function createSpy() {
    return;
}
receivesAFunction(spy());*/

function returnsANamedFunction() {
   return function namedFunction() {
       console.log('named function')
   }
}
function returnsAnAnonymousFunction () {
    return function(){
        console.log('hello');
    }
}