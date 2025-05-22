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
        console.log(typeof("first" * 1)) //number 
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

//relation operatore < > <= >= == !=
{
 console.log(10 < 20); //true
 console.log(10 > 20); //false
 console.log(10 <= 20); //true
 console.log(10 >= 20); //false
 console.log(10 == 20); //false
 console.log(10 != 20); //true mean not equal
 console.log(10 == "10"); //true
 console.log(10 === "10"); //false
 console.log(10 !== "10"); //true
 console.log(10 !== 10); //false
}

//logical operator && || !
{
    console.log(5>5  && 5<10); //false
    console.log(5==5 &&  5<10); //true)
    console.log(5>5 || 5<10); //true   
    console.log(5==5 || 5<10); //true
    console.log(!(5>5)); //true
}

// urary operator ++ --
{
    let a = 10;
    console.log(a++); //10  //post increment
    console.log(a); //11 
    console.log(++a); //12  //pre increment
    console.log(a); //12
    console.log(a--); //12      //post decrement
    console.log(a); //11
    console.log(--a); //10      //pre decrement
    console.log(a); //10
}

{
    let i = 11;
    i = i++ + ++i; //11 + 13 = 24 
    console.log(i); //24
}

{
    let a = 11, b = 22;
    let c = a + b + a++ + b++ + ++a + ++b; //11 + 22 + 11 + 22 + 13 + 24 = 123
    console.log("a=" + a) //13
    console.log("b=" + b) //24
    console.log("c=" + c); //123
}

{
    let b = true;
    b++;
    console.log(b); //2
    //because true is 1 and false is 0
    let c = false;
    --c;
    console.log(c); //-1
}

{
    // let a = 10++;
    // console.log(a); 
    //it will give error because we cannot assign value to constant 
    //(error)  Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
}

{
    // let i= 10;
    // let o = --(i++);
    // console.log(o); 
    //this will give error because we cannot assign value to constant
    //(error)  Uncaught SyntaxError: Invalid left-hand side expression in prefix operation
    //because bodmas rule bracket will be solve and in bracket we will have 10 and then --10 which is not valid
}

//math function
{
    //for rounding (if more than or equal to .5 it will go up)
    console.log(Math.round(10.5)); //11
    //for floor (it will go down no matter what)
    console.log(Math.floor(10.5)); //10
    //for ceil (it will go up no matter what)
    console.log(Math.ceil(10.1)); //11
    //for random (it will give random number between 0 and 1)
    console.log(Math.random()); //0.123456789
    //for trunc (it goes neither up or down just  cut the decimal))
    console.log(Math.trunc(10.5)); //10
    //for power (it will give power of number)
    console.log(Math.pow(2, 3)); //2^3 = 8
    //for square root
    console.log(Math.sqrt(4)); //square root of 4 is 2
    //for cube root
    console.log(Math.cbrt(8)); //cube root of 8 is 2
    //for absolute (it will give positive value)
    console.log(Math.abs(-10)); //10
    //for min (it will give minimum value)
    console.log(Math.min(10, 20, 30)); //10
    //for max (it will give maximum value)
    console.log(Math.max(10, 20, 30)); //30
    //random for otp 
    let otp = Math.floor(Math.random() * 1000000);
    console.log(otp); //123456 
    //random for otp with 6 digit, we need to multiply by how much zero after 1,
    //like for 6 digit we need to multiply by 1000000
    let otp2 = Math.floor(Math.random() * 10000);
    console.log(otp2); //1234
    //or we can do like this
    let otp3 = Math.trunc((Math.random() * 9000)+1000);
    console.log(otp3); //1234
    //for getting number of decimal 
    let decimal = 10.56789;
    console.log(decimal.toFixed(2)); //10.57
    console.log(decimal.toFixed(3)); //10.568
}

{
    //calculate area and perimeter of rectangle
    let length = 10;
    let breadth = 20;
    let area = length * breadth; //200
    let perimeter = 2 * (length + breadth); //60
    console.log("area=" + area); //200
    console.log("perimeter=" + perimeter); //60
}

{
    //area of triangle by heron's formula
    let a = 5;
    let b = 6;
    let c = 7;
    let s = (a + b + c) / 2; //8.5
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); //14.696938456699069
    console.log("area=" + area); //14.696938456699069
}

{
    //circumference of circle
    let radius = 10;
    let circumference = 2 * Math.PI * radius; //62.8318
    console.log(circumference); 
    console.log(circumference.toFixed(2)); //62.83
}