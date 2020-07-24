'use strict';
let jeffHt = 2
let jeMass = 70
let toddHt = 2
let todMass = 50

function calBmi(h,m){
   let bmi = m/(h*h)
   return bmi

}

let x = calBmi(jeffHt,jeMass)
let y = calBmi(toddHt,todMass)
console.log(x)
console.log(y)

if(x>y){
    let jeffBmiHigh = true
    console.log(`is Jeff’s BMI higher than Todd’s ${jeffBmiHigh}?`)

}else{
    let jeffBmiHigh = false
    console.log(`Jeff’s BMI higher than Todd’s ${jeffBmiHigh}`)
}