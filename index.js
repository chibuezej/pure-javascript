// document.getElementById("count-el").textContent =  10
let saveEl = document.getElementById("save-el")
console.log(saveEl)
let countEl = document.getElementById("count-el")
 let count = 0
function increment(){
  
 count = count +1
 countEl.textContent = count
} 
function save(){
    let saveStr = count + " - "
    saveEl.textContent += saveStr
    countEl.textContent = 0
    count = 0
}
