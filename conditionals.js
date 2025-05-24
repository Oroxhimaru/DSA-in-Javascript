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


