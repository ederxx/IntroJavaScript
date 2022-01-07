var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
    if(currentNumber < 10)
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement(){
    if(currentNumber > -10){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber>0){
    currentNumber.addEventListener("click",addEventos);
    }

}
function addEventos(){
    document.getElementById(currentNumber).style.color="#ffff00";
}

 
}