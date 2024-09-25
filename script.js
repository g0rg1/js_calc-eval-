const display = document.getElementById("display")

function addToDisplay(key){
    display.value += key;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value)
}