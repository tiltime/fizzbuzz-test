plan(2);
load('lib/fizzbuzz.js');
    test('fizzbuzz()', function() {
        ok( fizzbuzz(3) == "fizz", " 3 divide by 3 and return fizz" );
        ok( fizzbuzz(5) == "buzza", " 5 divide by 5 and return fizz" );
    });
