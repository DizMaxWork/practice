function sumArr(strArr){
   let arr = strArr.split('');
    let numArr = arr.map(Number);
    let sum = 0;
    for (let i = 0; i < numArr.length;i++){
        sum += numArr[i];
    }
    console.log("Sum is " + sum)
}
sumArr('12345')