function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 digit as calling again',pin); 
        return getPin();
    }

}
function generatePin(){
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    //will show target div
    const calcInput = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
    
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }
});


function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value
    const successMassege = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail')
    if(pin == typedNumbers){
        successMassege.style.display = "block";
        failError.style.display = "none";
    }
    else{
        failError.style.display = "block";
        successMassege.style.display = "none";
    }
}