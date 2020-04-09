let persons1 = []

for(let i = 0; i<10; i++){
    persons1[i] = {name: "홍길동", age: 16+i}
}

let persons2 = []
for(let i = 0; i<persons1.length; i++){
    persons2[i]=Object.assign({},persons1[i])
}
persons1[1].name = "홍갤동"
console.log(persons2);
