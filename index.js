const textBox = document.getElementById("textBox");
const toF = document.getElementById("toFahrenheit");
const toC = document.getElementById("toCelsius");
const result = document.getElementById("result");
let T;

function convert(){
    
    if(toF.checked){
    T = Number(textBox.value)* 9 / 5 + 32;
    

     result.textContent = T.toFixed(1) + "°F";
    }
    else if(toC.checked){
        T = (Number(textBox.value)-32)*5/9;
        result.textContent = T.toFixed(1) + "°C";
        }
    else{
        result.textContent="Select a unit";
    }

}
