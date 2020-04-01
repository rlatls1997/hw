let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."

let tmp = str.split(" ")
let newstr

for(let i = 0; i<tmp.length; i++){
    newstr += tmp[i];
}
console.log(newstr);