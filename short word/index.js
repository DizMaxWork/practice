function shortWord(str){
    var arr = str.split(' ');
    var sortedArr = arr.sort(function(a, b){
       return a.length - b.length 
    })
    return sortedArr[0]
}
console.log(shortWord('такая прекрасная могу'))
