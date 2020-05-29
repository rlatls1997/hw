function sum(a){
    let s = 0;
    for(let i = 0; i<a.length; i++){
        s += a[i];
    }
    return s;
}
function test_sum(f){
    let a = []
    for(let i = 0; i<5; i++){
        a[i] = Math.floor(Math.random()*11);
    }
    console.log(f(a));
}

for(let i = 0; i<5; i++){
    test_sum(sum);
}
