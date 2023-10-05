let convertButton = document.querySelector(".button_convert_money");


function convertValues() {
    let valueOfInput = document.querySelector(".entrada").value;
    let valueDolarDay = 5.2;
    let valueConvert = valueOfInput / valueDolarDay;
    console.log(valueOfInput);
}

convertButton.addEventListener("click",convertValues)




