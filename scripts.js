
// aqui chamo os meus principais recursos para poder fazer a logica da minha aplicação 
const convertButton = document.querySelector(".convert_button");
const selectPrime = document.querySelector(".box_select_one");
const selectSecundary = document.querySelector(".box_select_two");






// aqui são os eventos junto com a duas funçoes da minha aplicação. um evento de "click" e outro de troca "change"
convertButton.addEventListener("click", convertCurrencyReal);
selectPrime.addEventListener('change', selectorPrimary);
selectSecundary.addEventListener('change', selectorSecundary);


// troca a imagem , troca o texto , troca o tipo de moeda
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
// troca a imagem , troca o texto , troca o tipo de moeda
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




function convertReal() {
   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;
   // input do do valor
   const inputValue = document.querySelector(".input_values").value;

   // vai ser alterados nas outras funçoes
   value1.innerHTML = inputValue;

   // variaveis de conversao
   const dollarOfTheDay = 5.05;
   const euroOfTheDay = 0.19;
   const bitcoinOfTheDay = 0.0000072;
   const libraOfTheDay = 0.16;

   // isso sera alterado 
   let conversionRealToDollar  = inputValue / dollarOfTheDay;
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
   } else if (firstSelector == "real" && secondSelector  == "bitcoin") {
     
         value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",   
         currency: "BTC"
      }).format(conversionRealToBitcoin);
   

   } else if (firstSelector == "real" && secondSelector  == "euro") {

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversionRealToEuro);



   } else if (firstSelector == "real" && secondSelector  == "libra") {

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversionRealToLibraExterlina);



   } else if (firstSelector == "real" && secondSelector  == "real") {

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(inputValue);



   }

}

function convertCurrencyReal() {


   convertReal();
   convertDolar();



}



function convertDolar() {

   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const primeiroSeletor = document.querySelector(".box_select_one").value
   const segundoSeletor = document.querySelector(".box_select_two").value;
   // input do do valor
   const valorDoImput = document.querySelector(".input_values").value;

   // vai ser alterados nas outras funçoes
   value1.innerHTML = valorDoImput;

   // variaveis de conversao

   const euroDoDia = 0.95;
   const bitcoinDoDia = 0.0000072;
   const libraDoDia = 0.16;
   const realDoDia = 5.05 

   // isso sera alterado 
   let conversaoDolarParaDolar  = valorDoImput;
   let conversaoDolarParaReal = valorDoImput *   realDoDia;
   let conversaoDoDolarlParaEuro = valorDoImput * euroDoDia;
   let conversaodoDolarParaBitcoin = valorDoImput * bitcoinDoDia;
   let conversaoDolarParaLibraExterlina = valorDoImput * libraDoDia;

   if (primeiroSeletor == "dolar" && segundoSeletor == "dolar") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversaoDolarParaDolar);


      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (primeiroSeletor == "dolar" && segundoSeletor == "bitcoin") {
     
         value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",   
         currency: "BTC"
      }).format(conversaodoDolarParaBitcoin);
   

   } else if (primeiroSeletor == "dolar" && segundoSeletor == "euro") {

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversaoDoDolarlParaEuro);



   } else if (primeiroSeletor == "dolar" && segundoSeletor == "libra") {

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversaoDolarParaLibraExterlina);

 

   } else if (primeiroSeletor == "dolar" && segundoSeletor == "real") {

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(conversaoDolarParaReal);



   }
}


function convertEuro() {
   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const primeiroSeletor = document.querySelector(".box_select_one").value
   const segundoSeletor = document.querySelector(".box_select_two").value;
   // input do do valor
   const valorDoImput = document.querySelector(".input_values").value;

   // vai ser alterados nas outras funçoes
   value1.innerHTML = valorDoImput;

   // variaveis de conversao

   const euroDoDia = 0.95;
   const bitcoinDoDia = 0.0000072;
   const libraDoDia = 0.16;
   const realDoDia = 5.05 

   // isso sera alterado 
   let conversaoDolarParaDolar  = valorDoImput;
   let conversaoDolarParaReal = valorDoImput *   realDoDia;
   let conversaoDoDolarlParaEuro = valorDoImput * euroDoDia;
   let conversaodoDolarParaBitcoin = valorDoImput * bitcoinDoDia;
   let conversaoDolarParaLibraExterlina = valorDoImput * libraDoDia;

   if (primeiroSeletor == "euro" && segundoSeletor == "dolar") {

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversaoDolarParaDolar);


      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (primeiroSeletor == "euro" && segundoSeletor == "bitcoin") {
     
         value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",   
         currency: "BTC"
      }).format(conversaodoDolarParaBitcoin);
   

   } else if (primeiroSeletor == "euro" && segundoSeletor == "euro") {

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversaoDoDolarlParaEuro);



   } else if (primeiroSeletor == "euro" && segundoSeletor == "libra") {

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversaoDolarParaLibraExterlina);

 

   } else if (primeiroSeletor == "euro" && segundoSeletor == "real") {

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(conversaoDolarParaReal);



   }
}