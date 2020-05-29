let a = []
let evenSum = 0;

function f(a,b){
    if(b%2 == 0)
        return a+b;
    else
        return a;
}
for(let i = 0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
}
evenSum = a.reduce(f,0)
console.log(evenSum);


