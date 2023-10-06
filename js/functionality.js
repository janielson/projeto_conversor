

// aqui na entrada para input não se usa o .value mas sim so o propio elemento
let convertButton = document.querySelector(".button_convert_money");
let valueOfInput = document.querySelector(".entrada");


// aqui não pode selecionar antes da function
// let selectionOfEuroDolar = document.querySelector(".box_select_two").value;





function convertValues() {

 

  let selectionOfEuroDolar = document.querySelector(".box_select_two").value;
  let valueScreenBr = document.querySelector(".valuerealbr");
  let valueScreenUSD = document.querySelector(".valueamerican");

  let valueDolarDay = 5.17;

  let resultadoDolarParaReal = valueOfInput.value / valueDolarDay;
  
  


  // new Intl.NumberFormat( "String lingua" ,Objeto estiloTipoMoeda ).format() : void


  
 
  
  console.log("valor do input " + valueOfInput.value);
  console.log("Valor do seletor " + selectionOfEuroDolar);
  console.log("cotação do dolar para real brasileiro " + valueDolarDay);
  console.log("valor convertido de real para dolar  " + resultadoDolarParaReal);


  if (selectionOfEuroDolar === "dolar") { 

    valueScreenBr.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
    }).format(resultadoDolarParaReal)




  }
  if (selectionOfEuroDolar == "euro") {

    valueScreenBr.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(valueOfInput / valueEuroDay);



  }

 



}

convertButton.addEventListener("click", convertValues);






