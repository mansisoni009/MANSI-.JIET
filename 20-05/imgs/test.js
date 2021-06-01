var num=[100,9,48,45];
var num2=[];
var num3=[];


//que 1
while(num.length>0){
   num3.push(num.shift())
}
console.log(num3)

//question 2
var num=[100,9,48,45];
while(num.length > 0){
    num2.push(num.pop());
}
console.log(num2);

// que 3 combination  and permutation of two numbers

function  fact(f){
    var fact = 1;
    for(i=f; i>0 ; i--){
        fact = fact * i;
    }
    return fact;
}
function permutation(n,r){
    return (fact(n) / fact(n-r)) ;
}
function combination(n,r){
    return (fact(n) / (fact(r)*fact(n-r)));
}

console.log("permution is " + permutation(9,2));
console.log("combination is " +combination(10,2));
