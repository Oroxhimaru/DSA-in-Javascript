//  1. sum  of two integers
{
let a = 10;
let b = 20;
console.log(a + b); //30
}
// 2. summing of number and string (which is concatenation) and what type of output it will give
{
 let a = 10;
 let b = "20";
 console.log(a + b);  //1020
 console.log(typeof(a + b));  //string
}
// a little guide if in console the output is blue then it is a number and if it is black then it is a string
// 3. message plus number and number  (concatenation)
{
    let a = 3;
    let b = 20;
    console.log("hello" + a + b); // hello320
    console.log(typeof("hello" + a + b)); //string
    // it goes like this operand 1 operator (+) operand 2 = answer (string) operator (+) operand 3 = answer (string)
}

// 4.  same case as above but we want to add the number first and then the string (concatenation)
// we go with bodmas rule
{
    let a = 20;
    let b = 20;
    console.log("hello" + (a + b)); //hello40
    console.log(a + b + 'hello'); //40hello
}

//type coercion
{
    // this will minus it, because js enjine knnows minus only use for subtraction in numbers.
    console.log("20" - 20); //0
    //same goes for multiply and divide
    console.log("20" * 20); //400
    console.log("20" / 20); //1
    /*this is known as type coercion
     Type coercion is the automatic or implicit conversion of values from one data type to another
      (such as strings to numbers) */

      //but what if we do message with number 
        console.log("first" - 1) // we will get NaN , same for / *
}


{
    //prompt function change number in to string. it is just  pick string value
    // let a = prompt("tell your age");
    // console.log(a);
    // console.log(typeof(a)); //string
// for changing string to number we can use Number() function
    // let b = Number(prompt("tell your age"));
    // console.log(b);
    // console.log(typeof(b));
    //Number() function is used to convert a string or other value to a number. but that string should  be number
    // if we give string value in prompt then it will give NaN
    //console.log(Number("hello")); //NaN
    //so conversion of one data type to another type process known as type casting or type conversion.
}

//swappiing
{
    let a = 10;
    let b = 20;
    console.log(a, b);
    let c = a; //c = 10, a = 10
    a = b; // a = 20, b = 20
    b = c; // b = 10, c = 10
    console.log(a, b);
    console.log(c);
}

//seconnd method for swapping (without using third variable)
{
 let a = 10;
 let b = 20;
 a = a + b; // a = 30, b = 20
 b = a - b; // a = 30, b = 10
 a = a - b; // a = 20, b = 10
 console.log(a, b);
}

//third method for swapping (this is destructuring)
/*Destructuring ka matlab hota hai kisi array ya object ke andar se values ko nikaal kar alag 
variables mein assign karna ek hi line mein.
*/
{
 let a = 10;
    let b = 20;
    [a, b] = [b, a];
    console.log(a, b);
}

//+ - * / %
{
    let a = 10;
    let b = 20;
    console.log(a + b); //30
    console.log(a - b); //-10
    console.log(a * b);  //200
    console.log(a / b); //0.5
    console.log(a % b); //10 this is remainder
    //if in divide we want without decimal then we can use math.floor() function
    console.log(Math.floor(a / b)); //0
    console.log(typeof(Math.floor(a / b))); //number
    //if we want to round it
    console.log(Math.round(a / b)); //1
}







