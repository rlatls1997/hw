let a = []
let sum = 0;
let avg = 0;

for(let i = 0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
}
for(let i = 0; i<100; i++){
    sum += a[i];
}
avg = sum / a.length;

console.log(avg.toFixed(1));
