function minMax(){
    let arr = Array.from(arguments);
    arr.sort((a,b) => {return a - b})
    console.log(`Наименьшее число в массиве ${arr[0]}`)
    console.log(`Наибольшее число в массиве ${arr[arr.length-1]}`)
}
minMax(10,2,44,3,4,1,10328)