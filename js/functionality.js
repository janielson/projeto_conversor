let convertButton = document.querySelector(".button_convert_money");


function convertValues() {
    let valueOfInput = document.querySelector(".entrada").value;
    let valueScreenBr = document.querySelector(".valuerealbr");
    let valueScreenUSD = document.querySelector(".valueamerican");
     

    let valueDolarDay = 5.2;
    let valueConvert = valueOfInput / valueDolarDay;
    

    valueScreenBr.innerHTML = new Intl.NumberFormat("pt-br", {
        style:"currency",
        currency: "BRL"
    }).format(valueOfInput)

    valueScreenUSD.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(valueConvert)
}

convertButton.addEventListener("click",convertValues)




