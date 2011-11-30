plan(3);
load('lib/fizzbuzz.js');
    test('fizzbuzz()', function() {
        ok( fizzbuzz(3) == "fizz", " 3 divide by 3 and return fizz" );
        ok( fizzbuzz(5) == "buzz", " 5 divide by 5 and return fizz" );
        ok( fizzbuzz(15) == "fizz buzz", " 15 can divie by 3 and 5 then return fizz buzz");
    });
