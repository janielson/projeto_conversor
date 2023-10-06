

// aqui na entrada para input não se usa o .value mas sim so o propio elemento
let convertButton = document.querySelector(".button_convert_money");

   // seleciona o valor do input, o input no html deve ser do tipo number estava do tipo text
let valueOfInput = document.querySelector(".entrada");


// aqui não pode selecionar antes da function
// let selectionOfEuroDolar = document.querySelector(".box_select_two").value;





function convertValues() {


    // o o seletor do select option deve ficar dentro da função
    let selectionOfEuroDolar = document.querySelector(".box_select_two").value;

    // pega o valor que sera exibido na imagem do brasil
    let valueScreenBr = document.querySelector(".valuerealbr");

    // pega o valor que sera exibido na imagem do dolar
    let valueScreenDolar = document.querySelector(".valueamerican");


    // precisamos criar essas duas variaveis  para depois no codigo não ficar confuso
    let valueDolarDay = 5.17;
    let valueOfEuroDay = 5.45;

    // faz o calculo referente de conversao de dolar para real
    let resultadoDolarParaReal = valueOfInput.value / valueDolarDay;

    // faz o calculo referente de conversao de dolar euro para real 
    let resultadoDolarEuroParaReal =  valueOfInput.value / valueOfEuroDay;

    // todo valor capturado pelo input é exibido na imagem do brasil
    valueScreenBr.textContent = valueOfInput.value;


    // new Intl.NumberFormat( "String lingua" ,Objeto estiloTipoMoeda ).format() : void

     // esses console.log sao de teste para ser exibido no terminal

    console.log("valor do input " + valueOfInput.value);
    console.log("Valor do seletor " + selectionOfEuroDolar);
    console.log("cotação do dolar para real brasileiro " + valueDolarDay);
    console.log("valor convertido de real para dolar  " + resultadoDolarParaReal);
    console.log("Valalor exibido na imagem do brasil " + valueScreenBr.value);
    console.log("Resultado dolar euro para real " + resultadoDolarEuroParaReal);   

    // todo valor capturado pelo input é calculado e exibe esse resultado na imagem do dolar
    if (selectionOfEuroDolar === "dolar") {

        valueScreenDolar.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(resultadoDolarParaReal)
    }
    if (selectionOfEuroDolar === "euro") {

        valueScreenDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(resultadoDolarEuroParaReal);
    }
}

convertButton.addEventListener("click", convertValues);






