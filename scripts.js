

const convertButton = document.querySelector(".convert_button");
const selectPrime = document.querySelector(".box_select_one");
const selectSecundary = document.querySelector(".box_select_two");
const input = document.querySelector(".input_values");



convertButton.addEventListener("click", main);
selectPrime.addEventListener('change', selectorPrimary);
selectSecundary.addEventListener('change', selectorSecundary);

input.addEventListener("blur", addNumber);



// function addNumber(event) {
   
//    const input = document.querySelector(".input_values");
//    const decimalNumber = Number.parseFloat(input.value)

   
//    const NumberFormat = new Intl.NumberFormat("pt-BR" , 

//    {     
//       minimumFractionDigits:2, 
   
//    });
   
//    const formatedNumber = NumberFormat.format(decimalNumber);
   

//    input.value = formatedNumber;

// }


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
   let newNumber = Number.parseFloat(inputValue);
   inputValue = newNumber;

   // vai ser alterados nas outras funçoes
   value1.innerHTML = inputValue;

   // variaveis de conversao

   const euroOfTheDay = 0.95;
   const bitcointoDay = 0.000035057;
   const libraOfTheDay = 0.16;
   const realToDay = 5.05

   // isso sera alterado 
   let conversionDolarToDolar = inputValue;
   let conversionDolarToReal = inputValue * realToDay;
   let conversionDolarToEuro = inputValue * euroOfTheDay;
   let conversionDolarToBitcoin = inputValue * bitcointoDay;
   let conversionDolarToLibraExterlina = inputValue * libraOfTheDay;

   if (firstSelector == "dolar" && secondSelector == "dolar") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversionDolarToDolar);


      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (firstSelector == "dolar" && secondSelector == "bitcoin") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC",
         minimumFractionDigits: 4,
         maximumFractionDigits: 10
      }).format(conversionDolarToBitcoin);


   } else if (firstSelector == "dolar" &&    secondSelector == "euro") {

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversionDolarToEuro);



   } else if (firstSelector == "dolar" && secondSelector == "libra") {

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversionDolarToLibraExterlina);



   } else if (firstSelector == "dolar" && secondSelector == "real") {

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(conversionDolarToReal);



   }
}

function convertReal() {
   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;

   
   let inputValue = document.querySelector(".input_values").value;
   let newNumber = Number.parseFloat(inputValue);
   inputValue = newNumber;

   
   value1.innerHTML = inputValue;

   
   const dollarOfTheDay = 5.05;
   const euroOfTheDay = 0.19;
   const bitcoinOfTheDay = 0.0000072;
   const libraOfTheDay = 0.16;

   // isso sera alterado 
   let conversionRealToDollar = inputValue / dollarOfTheDay;

   console.log(inputValue);

   
   let conversionRealToEuro = inputValue * euroOfTheDay;


   // O BITCOIN ESTA CONVERTENDO SIM É QUE O NUMERO DE CASAS DECIMAIS DELE É MUITO GRANDE
   let conversionRealToBitcoin = inputValue * bitcoinOfTheDay;
   let conversionRealToLibraExterlina = inputValue / libraOfTheDay;

   if (firstSelector == "real" && secondSelector == "dolar") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversionRealToDollar);


      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (firstSelector == "real" && secondSelector == "bitcoin") {


      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BTC",

         minimumFractionDigits: 4,
         maximumFractionDigits: 10

      }).format(conversionRealToBitcoin);

     
      



   } else if (firstSelector == "real" && secondSelector == "euro") {

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversionRealToEuro);



   } else if (firstSelector == "real" && secondSelector == "libra") {

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversionRealToLibraExterlina);



   } else if (firstSelector == "real" && secondSelector == "real") {

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(inputValue);



   }



}

function convertEuro() {
   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;
   
   let inputValue = document.querySelector(".input_values").value;
   let newNumber = Number.parseFloat(inputValue);
   inputValue = newNumber;

   
   value1.innerHTML = inputValue;

   

   const euroOfTheDay = 0.95;
   const libraOfTheDay = 0.16;
   const taxaDeCambioDolar = 1.05527;
   const taxaDeCambioReal = 61.03;
   const taxaDeCambioBitcoin = 0.0000371746;
   const taxaDeCambiolibra = 0.86834;

 
   let conversionEuroToDolar = inputValue * taxaDeCambioDolar;
   let conversionEuroToReal = inputValue * taxaDeCambioReal; 
   let conversionEuroToEuro = inputValue;
   let conversionEuroToBitcoin = inputValue / taxaDeCambioBitcoin;
   let conversionEuroToLibraExterlina = inputValue * taxaDeCambiolibra;

   if (firstSelector == "euro" && secondSelector == "dolar") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversionEuroToDolar);


      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (firstSelector == "euro" && secondSelector == "bitcoin") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(conversionEuroToBitcoin);


   } else if (firstSelector == "euro" && secondSelector == "euro") {

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversionEuroToEuro);



   } else if (firstSelector == "euro" && secondSelector == "libra") {

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversionEuroToLibraExterlina);



   } else if (firstSelector == "euro" && secondSelector == "real") {

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(conversionEuroToReal);



   }
}

function convertLibra() {
   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;
   
   let inputValue = document.querySelector(".input_values").value;
   let newNumber = Number.parseFloat(inputValue);
   inputValue = newNumber;

   // vai ser alterados nas outras funçoes
   value1.innerHTML = inputValue;

   // variaveis de conversao

   const taxaDeCambioDolar = 1.21532 ;
   const taxaDeCambioReal = 6.14147;
   const taxaDeCambioBitcoin = 0.0000450851 ;
   const taxaDeCambioEuro = 1.15633;

   // isso sera alterado 
   let conversionLibraToDolar = inputValue * taxaDeCambioDolar;
   let conversionLibraToReal = inputValue * taxaDeCambioReal; 
   let conversionLibraToEuro = inputValue / taxaDeCambioEuro
   let conversionLibraToBitcoin = inputValue / taxaDeCambioBitcoin;
   let conversionLibraToLibraExterlina = inputValue;

   if (firstSelector == "libra" && secondSelector == "dolar") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversionLibraToDolar);


      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (firstSelector == "libra" && secondSelector == "bitcoin") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(conversionLibraToBitcoin);


   } else if (firstSelector == "libra" && secondSelector == "euro") {

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversionLibraToEuro);



   } else if (firstSelector == "libra" && secondSelector == "libra") {

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversionLibraToLibraExterlina);



   } else if (firstSelector == "libra" && secondSelector == "real") {

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(conversionLibraToReal);



   }
}

function convertBitcoin() {
   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;
   
   let inputValue = document.querySelector(".input_values").value;
   let newNumber = Number.parseFloat(inputValue);
   inputValue = newNumber;

   value1.innerHTML = inputValue;

  
   const taxaDeCambioDolar = 1.21532 ;
   const taxaDeCambioReal = 143.63078;
   const taxaDeCambioBitcoin = 28.44638 ;
   const taxaDeCambioEuro = 26.92684;
   const taxaDeCambiolibra =  23.10325

   let conversionBitcoionToDolar = inputValue * taxaDeCambioBitcoin;
   let conversionBitcoinToReal = inputValue * taxaDeCambioReal; 
   let conversionBitcoinToEuro = inputValue * taxaDeCambioEuro;
   let conversionBitcoinToBitcoin = inputValue;
   let conversionBitcoinToLibraExterlina = inputValue * taxaDeCambiolibra

   if (firstSelector == "bitcoin" && secondSelector == "dolar") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversionBitcoionToDolar);


      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (firstSelector == "bitcoin" && secondSelector == "bitcoin") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(conversionBitcoinToBitcoin);


   } else if (firstSelector == "bitcoin" && secondSelector == "euro") {

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversionBitcoinToEuro);



   } else if (firstSelector == "bitcoin" && secondSelector == "libra") {

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversionBitcoinToLibraExterlina);



   } else if (firstSelector == "bitcoin" && secondSelector == "real") {

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(conversionBitcoinToReal);



   }
}