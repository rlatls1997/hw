let a = []
let b = []

for(let i = 0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
}

for(let i = 0; i<100; i++){
    let x = a[i]%2;
    if(x != 0){               //x가 2의 배수가 아닐경우 배열 b에 삽입                                    
        b.push(a[i])
    }
}
console.log(b);