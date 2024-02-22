let arr = [1, 2, 3, 4, 5];
// mul array
let mulArr = arr.map((n) => {
    return n * 2;
});
// indexed array
let idxArr = arr.map((n) => {
    return arr.indexOf(n);
});

console.log("Original Array :", arr);
console.log("Mul array:", mulArr);
console.log("Indexed Array:", idxArr);

