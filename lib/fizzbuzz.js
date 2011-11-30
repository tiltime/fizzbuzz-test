/** fizz buzz function **/
function fizzbuzz(num){
    var result;
    if (num % 3 == 0 && num % 5 == 0){
        result = "fizz buzz";
    }
    else if (num % 3 == 0){
        result = "fizz";
    }
    else if (num % 5 == 0){
        result = "buzz";
    }
    else result = num;
    return result;
}