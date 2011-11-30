/** fizz buzz function **/
function fizzbuzz(num){
    var result;
    if (num % 3 == 0 && num % 5 == 0){
        result = "fizz buzz";
    }
    if (num % 3 == 0){
        result = "fizz";
    }
    else if (num % 5 == 0){
        result = "buzz";
    }
    return result;
}