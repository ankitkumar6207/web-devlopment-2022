console.log("this is a js file");
// function greet(name,greetText){
//     let name1="name1";//this is a local variable and its scope is local scope inside the function.it can't call from the outsite of this function.

//     console.log(greetText+" "+ name);
//     console.log(name+" is a good boy");

// }


function greet(name,greetText="welcome to javascript"){//this is default argument agr hm greettext me kuch pas nhi krte h to wo uper wala default text lelega but agr tumne kuch pass kiya h to it will never take this value(see name rani)

    console.log(greetText+" "+ name);
    console.log(name+" is a good boy");

}

function sum(a,b,c){
    let sum =a+b+c;
    return sum;
}


// use let to create variable because it is block level element and it has very clear scope(don't use var). 
let greetText="Good Morning";
let name1="Ankit";
let name2="subham";
let name3="rahul";
let name4="rani";

greet(name1,greetText);//function call and we can call function manytimes.
greet(name2,greetText);
greet(name3,greetText);
greet(name4);

let add=sum(1,2,3);
console.log(add);

