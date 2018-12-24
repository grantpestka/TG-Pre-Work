const plantNeedsWater = function(day){
  if (day === 'Wednesday') {
    return true;
  }else{
    return false;
  }
}
console.log(plantNeedsWater('Tuesday'));

// Function can also be called with a function expression.  A function expression is comprised of a variable defination set to a funtion and paramaters
// const identifier_name = function (param1, param2, ...) {function_body}
// Function expressions cannot be called before they are defined.
