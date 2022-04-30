let inp = document.querySelector('input')
let lb =  document.querySelector('label')




inp.onkeyup = () => {
let a = inp.value
let b = String(+a)
if(a===b){
    inp.style.border = '2px solid green'
    lb.innerHTML = ''
} else {
    inp.style.border = '2px solid red'
    inp.value = ''
    lb.innerHTML = 'Введите только числа'
    lb.style.color = 'red'
    
}
}
