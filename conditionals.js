//conditionals

{
    let a = false;
    if(a){
        console.log("this is true");
    }
    else{
        console.log("this is false");
    }
}

{
    //else does not work without if
    // else {
    //     console.log("this is false");
    // }
    //error: Uncaught SyntaxError: Unexpected token 'else'
}

{
    //valid voter questions
    // let age = Number(prompt("tell your age"));
    let age = "has";

    //we can't write Nan = true because NaN === NaN is false
    //so we have special methid for it which is isNaN()
    //isNaN() function is used to check if a value is NaN or not.
    if(isNaN(age)){
        console.log("invalid input")
    }

    if(age >= 18){
        console.log("you can vote");
    }
    else{
        console.log("you cannot vote");
    }
}



{
    //shop discount
    let amount = 11000;
    let discount = 0;
    if(amount > 0 && amount <= 5000){
        console.log("you got no discount");
        discount = 0;
        console.log(amount);
    }
    else if(amount > 5000 && amount <= 10000){
        discount = 0.1;
        console.log(Math.floor(amount - (amount * discount)));
        console.log("you got 10% discount");
    }
    else if(amount > 10000 && amount <= 20000){
        discount = 0.2;
        console.log(Math.floor(amount - (amount * discount)));
        console.log("you got 20% discount");
    }
}

// electricity bill
{
    let unit = 200;
    let billperunit = 4.2;
    if(unit <= 100){
        console.log(unit * billperunit);
    }
    else if(unit >= 101 && unit <= 200){
        billperunit = 5;
        console.log(unit * billperunit);
     }
     else if(unit >= 201 && unit <= 300){
        billperunit = 6;
        console.log(unit * billperunit);
     }
}

//pkr denomination
{
    let amount = 2345;
    let deno = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let count = 0;
    if(amount >= 1000){
        count = Math.floor(amount / 1000);
        amount = amount % 1000;
        console.log(deno[0] + " " + count + " and" + " " + amount);
    }
    if(amount >= 500){
        count = Math.floor(amount / 500);
        amount = amount % 500;
        console.log(deno[1] + " " + count + " and" + " " + amount);
    }
    if(amount >= 100){
        count = Math.floor(amount / 100);
        amount = amount % 100;
        console.log(deno[2] + " " + count + " and" + " " + amount);
    }
    if(amount >= 50){
        count = Math.floor(amount / 50);
        amount = amount % 50;
        console.log(deno[3] + " " + count + " and" + " " + amount);
    }
    if(amount >= 20){
        count = Math.floor(amount / 20);
        amount = amount % 20;
        console.log(deno[4] + " " + count + " and" + " " + amount);
    }
    if(amount >= 10){
        count = Math.floor(amount / 10);
        amount = amount % 10;
        console.log(deno[5] + " " + count + " and" + " " + amount);
    }
    if(amount >= 5){
        count = Math.floor(amount / 5);
        amount = amount % 5;
        console.log(deno[6] + " " + count + " and" + " " + amount);
    }
    if(amount >= 2){
        count = Math.floor(amount / 2);
        amount = amount % 2;
        console.log(deno[7] + " " + count + " and" + " " + amount);
    }
    if(amount >= 1){
        count = Math.floor(amount / 1);
        amount = amount % 1;
        console.log(deno[8] + " " + count + " and" + " " + amount);
    }
}


// ternary operator ? :
{
  let a = 10;
  let b = 20;
  let c = a > b ? a : b; // if a is greater than b then c will be a else b
  console.log(c);
}

//nested ternary operator
{
    let a = 10;
    let b = 20;
    let c = a > b ? a > 15 ? "a is greater than 15" : "a is less than 15" : b > 15 ? "b is greater than 15" : "b is less than 15";
    console.log(c);
    //first check if a is greater than b then check if a is greater than 15 then print 
    // "a is greater than 15" else print "a is less than 15" else check if b is greater than 15 then 
    // print "b is greater than 15" else print "b is less than 15"
}

{
    let number = 0
    let integer = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
    console.log(integer);
}


//switch case
{
    let day = 1;
    switch(day){
        case 1:
            console.log("monday");
            break;
        case 2:
            console.log("tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("thursday");
            break;
        default:
            console.log("invalid input");
    }    
    //if we remove break all the cases will be executed
}