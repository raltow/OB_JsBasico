
const arr=[0, 1]
let j

function fibo(num) {
    for (let i = 0;i < num-2; i++){
        j = arr[i] + arr[i+1]
        arr.push(j)
    }
}
fibo(5)
console.log(arr)