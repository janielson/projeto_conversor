
let convertButton = document.querySelector(".button_convert_money");
let selectionOfEuroDolar = document.querySelector(".box_select_two");


function convertValues() {

    let valueOfInput = document.querySelector(".entrada").value;
    let valueScreenBr = document.querySelector(".valuerealbr");
    let valueScreenUSD = document.querySelector(".valueamerican");

    console.log(selectionOfEuroDolar.value)

    let valueDolarDay = 5.17;
    let valueEuroDay = 4.2
   


    // new Intl.NumberFormat( "String lingua" ,Objeto estiloTipoMoeda ).format() : void

      if(selectionOfEuroDolar == "dolar" ){
        valueScreenBr.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(valueOfInput / valueDolarDay)

      }
      if(selectionOfEuroDolar == "euro" ){
        valueScreenBr.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueOfInput / valueEuroDay );

      }

  
    

    



}

convertButton.addEventListener("click", convertValues);






