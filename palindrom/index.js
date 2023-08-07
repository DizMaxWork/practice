const arr = ['т','е','с','т'];
const arrStr = arr.join('')
const reverse = arr.reverse()
const str = reverse.join('')

if(arrStr === str){
    console.log('Слово полиндром')
} else {
    alert('Подберите другое слово')
}