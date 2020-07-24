'use strict';
function calAvg(a,b,c){
    let avg=(a+b+c)/3
    return avg
}

let a = calAvg(89,120,103)
let b = calAvg(116,94,123)

if(a>b){
    console.log(`Heath's team is the Winner with ${a}`)

}else{
    console.log(`Zane's team is the Winner with ${b}`)

} 

let h=calAvg(59,83,165)
let z=calAvg(116,94,63)
let m=calAvg(97,134,105)

if(a>b && a>c){
    console.log(`Heath's team is the Winner with ${h}`)
}
else if(b>a){
    console.log(`Zane's team is the Winner with ${z}`)

}
else{
    console.log(`Marish's team is the Winner with ${m}`)
}




