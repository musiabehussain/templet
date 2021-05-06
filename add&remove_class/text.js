const hello = document.querySelector('.hello');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const check = document.querySelector('#check');
const addAll = document.querySelector('#addAll');
const removeAll = document.querySelector('#removeAll');



add.addEventListener('click',() =>{
     hello.classList.add('bg');
})
remove.addEventListener('click', () => {
     hello.classList.remove('bg');
})
toggle.addEventListener('click', () => {
     hello.classList.toggle('bg');
})
check.addEventListener('click', () => {
       hello.innerText= hello.classList.contains('bg');
})



addAll.addEventListener('click', () => {
     hello.classList.add('bd');
})
removeAll.addEventListener('click', () => {
     hello.classList.remove('bd');
})





let a =["ali","zahid"];
let b =["hussain","rashis"];


