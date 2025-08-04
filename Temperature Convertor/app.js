const textbox = document.querySelector("#textbox");
const toFahrenheit = document.querySelector("#toFahrenheit");
const toCelsius = document.querySelector("#toCelsius");
const result = document.querySelector("#result");

let temp;

function convert(){
    if(toFahrenheit.checked){
        
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";

    } else if (toCelsius.checked){

        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
        
    } else {
        result.innerText = `Select a unit`;
    }
}