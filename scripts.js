

const convertButton = document.querySelector(".convert_button");
const selectPrime = document.querySelector(".box_select_one");
const selectSecundary = document.querySelector(".box_select_two");
const input = document.querySelector(".input_values");



convertButton.addEventListener("click", main);
selectPrime.addEventListener('change', selectorPrimary);
selectSecundary.addEventListener('change', selectorSecundary);

input.addEventListener("blur", addNumber);


function addNumber(event) {

   const input = document.querySelector(".input_values");
   const decimalNumber = Number.parseFloat(input.value)


   const NumberFormat = new Intl.NumberFormat("pt-BR",

      {
         minimumFractionDigits: 2,

      });

   const formatedNumber = NumberFormat.format(decimalNumber);


   input.value = formatedNumber;

}


function selectorPrimary() {
   const image1 = document.querySelector(".img_convert");
   const text1 = document.querySelector(".currency");
   const selectPrime = document.querySelector(".box_select_one");
   const value1 = document.querySelector(".currency_value_to_convert");


   if (selectPrime.value == "real") {
      image1.src = "./assets/brasil.png";
      text1.innerHTML = "Real";

      //  alterar aqui

      value1.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(0.00)

   } else if (selectPrime.value == "dolar") {
      image1.src = "./assets/estados-unidos.png";
      text1.innerHTML = "Dolar";


      value1.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(0.00);


   } else if (selectPrime.value == "euro") {
      image1.src = "./assets/euro.png";
      text1.innerHTML = "Euro";


      value1.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(0.00);



   } else if (selectPrime.value == "libra") {
      image1.src = "./assets/libra.png";
      text1.innerHTML = "Libra";


      //  alterar aqui

      value1.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(0.00);


   } else if (selectPrime.value == "bitcoin") {
      image1.src = "./assets/bitcoin.png";
      text1.innerHTML = "Bitcoin";

      //  alterar aqui

      value1.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(0.00);


   }



}

function selectorSecundary() {
   const image2 = document.querySelector(".img_converted");
   const text2 = document.getElementById("name_currency");
   const selectSecundary = document.querySelector(".box_select_two");
   const value2 = document.querySelector(".currency_value");

   if (selectSecundary.value == "real") {
      image2.src = "./assets/brasil.png";
      text2.innerHTML = "Real";


      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(0.00);


   } else if (selectSecundary.value == "dolar") {
      image2.src = "./assets/estados-unidos.png";
      text2.innerHTML = "Dolar";

      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(0.00);

   } else if (selectSecundary.value == "euro") {
      image2.src = "./assets/euro.png";
      text2.innerHTML = "Euro";


      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(0.00);


   } else if (selectSecundary.value == "libra") {
      image2.src = "./assets/libra.png";
      text2.innerHTML = "Libra";

      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(0.00);

   } else if (selectSecundary.value == "bitcoin") {
      image2.src = "./assets/bitcoin.png";
      text2.innerHTML = "Bitcoin";


      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(0.00);


   }



}




function main() {


   convertReal();
   convertDolar();
   convertEuro();
   convertLibra();
   convertBitcoin();




}

function convertDolar() {

   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;
   // input do do valor
   let inputValue = document.querySelector(".input_values").value;



   // vai ser alterados nas outras funçoes
   const newString = inputValue.replace(/\./g, "").replace(/,/g, ".");
   // converte a String em numero
   const changedValue = parseFloat(newString);
   // pega o valor antigo porque eu vou usar ela depois
   const oldValue = changedValue;

   // os fracts
   let minimalFracts1 = 2;
   let maximalfracts1 = 4;
   let minimalFracts2 = 2;
   let maximalfracts2 = 4
   // variaveis de conversao

   const euroOfTheDay = 0.95;
   const bitcointoDay = 0.000035057;
   const libraOfTheDay = 0.16;
   const realToDay = 5.05

   // isso sera alterado 
   let conversionDolarToDolar = changedValue;
   let conversionDolarToReal = changedValue * realToDay;
   let conversionDolarToEuro = changedValue * euroOfTheDay;
   let conversionDolarToBitcoin = changedValue * bitcointoDay;
   let conversionDolarToLibraExterlina = changedValue * libraOfTheDay;

   if (firstSelector == "dolar" && secondSelector == "dolar") {

      summaryValues(value1, value2, "en-US", "USD", "en-US", "USD",
         oldValue, oldValue, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (firstSelector == "dolar" && secondSelector == "bitcoin") {

      minimalFracts2 = 4;
      maximalfracts2 = 10

      summaryValues(value1, value2, "en-US", "USD", "en-US", "BTC",
         oldValue, conversionDolarToBitcoin, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   } else if (firstSelector == "dolar" && secondSelector == "euro") {


      summaryValues(value1, value2, "en-US", "USD", "de-DE", "EUR",
         oldValue, conversionDolarToEuro, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   } else if (firstSelector == "dolar" && secondSelector == "libra") {

      summaryValues(value1, value2, "en-US", "USD", "en-GB", "GBP",
         oldValue, conversionDolarToLibraExterlina, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   } else if (firstSelector == "dolar" && secondSelector == "real") {

      summaryValues(value1, value2, "en-US", "USD", "pt-BR", "BRL",
         oldValue, conversionDolarToReal, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);



   }
}

function convertReal() {
   const value1 = document.querySelector(".value1");
   const value2 = document.querySelector(".value2");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;
   let inputValue = document.querySelector(".input_values").value;

   // CODIGO ADICIONADO
   // remove caracteres especias da String tira o . e troca pela virgula
   const newString = inputValue.replace(/\./g, "").replace(/,/g, ".");
   // converte a String em numero
   const changedValue = parseFloat(newString);
   // pega o valor antigo porque eu vou usar ela depois
   const oldValue = changedValue;

   // os fracts
   let minimalFracts1 = 2;
   let maximalfracts1 = 4;
   let minimalFracts2 = 2;
   let maximalfracts2 = 4



   // variaveis de conversao
   const dollarOfTheDay = 5.05;
   const euroOfTheDay = 0.19;
   const bitcoinOfTheDay = 0.0000072;
   const libraOfTheDay = 0.16;

   // REALIZA OS CALCULOS
   let conversionRealToDollar = changedValue / dollarOfTheDay;
   let conversionRealToEuro = changedValue * euroOfTheDay;
   // O BITCOIN ESTA CONVERTENDO SIM É QUE O NUMERO DE CASAS DECIMAIS DELE É MUITO GRANDE
   let conversionRealToBitcoin = changedValue * bitcoinOfTheDay;
   let conversionRealToLibraExterlina = changedValue / libraOfTheDay;

   if (firstSelector == "real" && secondSelector == "dolar") {


      summaryValues(value1, value2, "pt-BR", "BRL", "en-US", "USD",
         oldValue, conversionRealToDollar, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   }

   else if (firstSelector == "real" && secondSelector == "bitcoin") {

      minimalFracts1 = 2;
      maximalfracts1 = 10;
      minimalFracts2 = 2;
      maximalfracts2 = 10;


      summaryValues(value1, value2, "pt-BR", "BRL", "pt-BR", "BTC",
         oldValue, conversionRealToBitcoin, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   } else if (firstSelector == "real" && secondSelector == "euro") {


      summaryValues(value1, value2, "pt-BR", "BRL", "de-DE", "EUR",
         oldValue, conversionRealToEuro, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);





   } else if (firstSelector == "real" && secondSelector == "libra") {


      summaryValues(value1, value2, "pt-BR", "BRL", "en-GB", "GBP",
         oldValue, conversionRealToLibraExterlina, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);





   } else if (firstSelector == "real" && secondSelector == "real") {

      summaryValues(value1, value2, "pt-BR", "BRL", "pt-BR", "BRL",
         oldValue, oldValue, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);
   }



}


// CONVERSORES 
function convertEuro() {
   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;
   let inputValue = document.querySelector(".input_values").value;


   // CODIGO ADICIONADO
   // remove caracteres especias da String tira o . e troca pela virgula
   const newString = inputValue.replace(/\./g, "").replace(/,/g, ".");
   // converte a String em numero
   const changedValue = parseFloat(newString);
   // pega o valor antigo porque eu vou usar ela depois
   const oldValue = changedValue;

   // os fracts
   let minimalFracts1 = 2;
   let maximalfracts1 = 4;
   let minimalFracts2 = 2;
   let maximalfracts2 = 4


   const euroOfTheDay = 0.95;
   const libraOfTheDay = 0.16;
   const taxaDeCambioDolar = 1.05527;
   const taxaDeCambioReal = 61.03;
   const taxaDeCambioBitcoin = 0.0000371746;
   const taxaDeCambiolibra = 0.86834;


   let conversionEuroToDolar = changedValue * taxaDeCambioDolar;
   let conversionEuroToReal = changedValue * taxaDeCambioReal;
   let conversionEuroToEuro = changedValue;
   let conversionEuroToBitcoin = changedValue / taxaDeCambioBitcoin;
   let conversionEuroToLibraExterlina = changedValue * taxaDeCambiolibra;

   if (firstSelector == "euro" && secondSelector == "dolar") {

      summaryValues(value1, value2, "de-DE", "EUR", "en-US", "USD",
         oldValue, conversionEuroToDolar, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);
      //

      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (firstSelector == "euro" && secondSelector == "bitcoin") {

      minimalFracts2 = 2;
      maximalfracts2 = 10;

      summaryValues(value1, value2, "de-DE", "EUR", "de-DE", "BTC",
         oldValue, conversionEuroToDolar, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);


   } else if (firstSelector == "euro" && secondSelector == "euro") {

      summaryValues(value1, value2, "de-DE", "EUR", "de-DE", "EUR",
         oldValue, oldValue, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);


   } else if (firstSelector == "euro" && secondSelector == "libra") {

      summaryValues(value1, value2, "de-DE", "EUR", "en-GB", "GBP",
         oldValue, conversionEuroToLibraExterlina, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);


   } else if (firstSelector == "euro" && secondSelector == "real") {

      summaryValues(value1, value2, "de-DE", "EUR", "pt-BR", "BRL",
         oldValue, conversionEuroToReal, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   }
}

function convertLibra() {
   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;

   let inputValue = document.querySelector(".input_values").value;
   // CODIGO ADICIONADO
   // remove caracteres especias da String tira o . e troca pela virgula
   const newString = inputValue.replace(/\./g, "").replace(/,/g, ".");
   // converte a String em numero
   const changedValue = parseFloat(newString);
   // pega o valor antigo porque eu vou usar ela depois
   const oldValue = changedValue;

   // os fracts
   let minimalFracts1 = 2;
   let maximalfracts1 = 4;
   let minimalFracts2 = 2;
   let maximalfracts2 = 4

   // variaveis de conversao

   const dollarExchangeRate = 23197.10;
   const realExchangeRate = 6.14147;
   const bitcoinExchangeRate = 28.25571;
   const euroExchangeRate = 1.15633;

   // isso sera alterado 
   let conversionLibraToDolar = changedValue * dollarExchangeRate;
   let conversionLibraToReal = changedValue * realExchangeRate;
   let conversionLibraToEuro = changedValue / euroExchangeRate
   let conversionLibraToBitcoin = changedValue / dollarExchangeRate;
   let conversionLibraToLibraExterlina = changedValue;

   if (firstSelector == "libra" && secondSelector == "dolar") {

      summaryValues(value1, value2, "en-GB", "GBP", "en-US", "USD",
         oldValue, conversionLibraToDolar, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (firstSelector == "libra" && secondSelector == "bitcoin") {

      // minimalFracts2 = 2;
      // maximalfracts2 = 10;

      summaryValues(value1, value2, "en-GB", "GBP", "en-GB", "BTC",
         oldValue, conversionLibraToBitcoin, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   } else if (firstSelector == "libra" && secondSelector == "euro") {

      summaryValues(value1, value2, "en-GB", "GBP", "de-DE", "EUR",
         oldValue, conversionLibraToEuro, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   } else if (firstSelector == "libra" && secondSelector == "libra") {

      summaryValues(value1, value2, "en-GB", "GBP", "en-GB", "GBP",
         oldValue, oldValue, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   } else if (firstSelector == "libra" && secondSelector == "real") {

      summaryValues(value1, value2, "en-GB", "GBP", "pt-BR", "BRL",
         oldValue, conversionLibraToReal, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   }
}

function convertBitcoin() {
   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;

   let inputValue = document.querySelector(".input_values").value;

   // CODIGO ADICIONADO
   // remove caracteres especias da String tira o . e troca pela virgula
   const newString = inputValue.replace(/\./g, "").replace(/,/g, ".");
   // converte a String em numero
   const changedValue = parseFloat(newString);
   // pega o valor antigo porque eu vou usar ela depois
   const oldValue = changedValue;

   // os fracts
   let minimalFracts1 = 2;
   let maximalfracts1 = 4;
   let minimalFracts2 = 2;
   let maximalfracts2 = 4


   const dollarExchangeRate = 1.21532;
   const realExchangeRate = 143.63078;
   const bitcoinExchangeRate = 28.44638;
   const euroExchangeRate = 26.92684;
   const libraExchangeRate = 23.10325

   let conversionBitcoionToDolar = changedValue * bitcoinExchangeRate;
   let conversionBitcoinToReal = changedValue * realExchangeRate;
   let conversionBitcoinToEuro = changedValue * euroExchangeRate;
   let conversionBitcoinToBitcoin = changedValue;
   let conversionBitcoinToLibraExterlina = changedValue * libraExchangeRate;

   if (firstSelector == "bitcoin" && secondSelector == "dolar") {
      minimalFracts1 = 2;
      maximalfracts1 = 10;

      summaryValues(value1, value2, "de-DE", "BTC", "de-DE", "USD",
         oldValue, conversionBitcoionToDolar, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (firstSelector == "bitcoin" && secondSelector == "bitcoin") {

      minimalFracts1 = 2;
      maximalfracts1 = 10;
      
      summaryValues(value1, value2, "de-DE", "BTC", "de-DE", "BTC",
      oldValue, oldValue, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   } else if (firstSelector == "bitcoin" && secondSelector == "euro") {

      minimalFracts1 = 2;
      maximalfracts1 = 10;
      
      summaryValues(value1, value2, "de-DE", "BTC", "de-DE", "EUR",
      oldValue, conversionBitcoinToEuro, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   } else if (firstSelector == "bitcoin" && secondSelector == "libra") {

      minimalFracts1 = 2;
      maximalfracts1 = 10;
      
      summaryValues(value1, value2, "de-DE", "BTC", "en-GB", "GBP",
      oldValue, conversionBitcoinToLibraExterlina, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   } else if (firstSelector == "bitcoin" && secondSelector == "real") {
      
      minimalFracts1 = 2;
      maximalfracts1 = 10;
      
      summaryValues(value1, value2, "de-DE", "BTC", "pt-BR", "BRL",
      oldValue, conversionBitcoinToReal, minimalFracts1, maximalfracts1, minimalFracts2, maximalfracts2);

   }
}


// REFATORAÇÃO

function summaryValues(value1, value2, language1, currency1, language2, currency2, valueScreen1, valueScreenCalculate, minimal1,
   maximal1, minimal2, maximal2) {

   // CODIGO ADICIONADO
   value1.innerHTML = new Intl.NumberFormat(language1, {
      style: "currency",
      currency: currency1,
      minimumFractionDigits: minimal1,
      maximumFractionDigits: maximal1

   }).format(valueScreen1);

   value2.innerHTML = new Intl.NumberFormat(language2, {
      style: "currency",
      currency: currency2,
      minimumFractionDigits: minimal2,
      maximumFractionDigits: maximal2
   }).format(valueScreenCalculate);


}

