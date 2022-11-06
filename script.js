// Created Using Easy HTML v1.4.8
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

let counter =document.getElementById("count-el")
console.log(counter)
let co = 0
function increment(){
  co = co + 1
  counter.innerText=co
}
function save(){
  let previous = document.getElementById("previous-el")
  console.log(co)
  previous.innerText +=  "   " +co + "   -   "
}
let reSet=document.getElementById("count-el")
console.log(reSet)
let reseT=0
function reset(){
  reSet.innerText=reseT
  co = reseT
}
let data = document.getElementById("count-el")
console.log(data)
function decrement(){
  co = co - 1
  data.innerText=co
}
