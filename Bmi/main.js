//let height =1.79
//let weight = 63
//let BMI = weight/(height*height)
//console.log(BMI);

function calbmi(){

  
   // result.value=eval(result.value)
let height = document.getElementById("heightinput").value
 let weight = document.getElementById("weightinput").value
 let Bmi =  weight/(height*height)

document.getElementById("result").value=Bmi;  
}



