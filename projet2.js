const numbers = document.querySelectorAll(".numbers");
const btn = document.getElementById("btn");
const rateAgain = document.getElementById("btn-2");
const rate = document.getElementById("rate");
const results = document.getElementById("results");
const rating = document.getElementById("rating");
 

btn.addEventListener("click", () => {
    rate.classList.toggle("hidden")
    results.classList.toggle("hidden")
    
  })


  rateAgain.addEventListener("click", () => {
    rate.classList.toggle("hidden")
    results.classList.toggle("hidden")
  })


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click",() => {
        rating.innerHTML = i+1
    })
  
      
}