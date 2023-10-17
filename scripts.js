
// aqui chamo os meus principais recursos para poder fazer a logica da minha aplicação 
const convertButton = document.querySelector(".convert_button");
const selectPrime = document.querySelector(".box_select_one");
const selectSecundary = document.querySelector(".box_select_two");
const text1 = document.querySelector(".currency");
const text2 = document.getElementById("name_currency");
const value1 = document.querySelector(".currency_value_to_convert");
const value2 = document.querySelector(".currency_value");



// aqui são os eventos junto com a duas funçoes da minha aplicação. um evento de "click" e outro de troca "change"
convertButton.addEventListener("click", convertCurrencyReal);
selectPrime.addEventListener('change', selectorPrimary);
selectSecundary.addEventListener('change',  selectorSecundary);


// troca a imagem , troca o texto , troca o tipo de moeda
function  selectorPrimary() {
   const imagem1 = document.querySelector(".img_convert");
   const valorDoImput = document.querySelector(".input_values").value;

   if (selectPrime.value == "real") {
      imagem1.src = "./assets/brasil.png";
      text1.innerHTML = "Real";

      //  alterar aqui

      value1.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(0.00)

   } else if (selectPrime.value == "dolar") {
      imagem1.src = "./assets/estados-unidos.png";
      text1.innerHTML = "Dolar";


      value1.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(0.00);


   } else if (selectPrime.value == "euro") {
      imagem1.src = "./assets/euro.png";
      text1.innerHTML = "Euro";


      value1.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(0.00);



   } else if (selectPrime.value == "libra") {
      imagem1.src = "./assets/libra.png";
      text1.innerHTML = "Libra";


      //  alterar aqui

      value1.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(0.00);


   } else if (selectPrime.value == "bitcoin") {
      imagem1.src = "./assets/bitcoin.png";
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
   const imagem2 = document.querySelector(".img_converted");

   if (selectSecundary.value == "real") {
      imagem2.src = "./assets/brasil.png";
      text2.innerHTML = "Real";


      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(0.00);


   } else if (selectSecundary.value == "dolar") {
      imagem2.src = "./assets/estados-unidos.png";
      text2.innerHTML = "Dolar";

      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(0.00);

   } else if (selectSecundary.value == "euro") {
      imagem2.src = "./assets/euro.png";
      text2.innerHTML = "Euro";


      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(0.00);


   } else if (selectSecundary.value == "libra") {
      imagem2.src = "./assets/libra.png";
      text2.innerHTML = "Libra";

      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(0.00);

   } else if (selectSecundary.value == "bitcoin") {
      imagem2.src = "./assets/bitcoin.png";
      text2.innerHTML = "Bitcoin";


      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(0.00);


   }



}






function convertCurrencyReal() {

   const primeiroSeletor = document.querySelector(".box_select_one").value
   const segundoSeletor = document.querySelector(".box_select_two").value;
   // input do do valor
   const valorDoImput = document.querySelector(".input_values").value; 
   
   // vai ser alterados nas outras funçoes
   value1.innerHTML = valorDoImput;

   // variaveis de conversao
   const dolarDoDia = 5.05;
   const euroDoDia = 0.19;
   const bitcoinDoDia = 0.0000072;
   const libraDoDia = 0.16;


   // isso sera alterado 
   let conversaoRealParaDolar = valorDoImput / dolarDoDia;
   let conversaoDeRealParaEuro = valorDoImput * euroDoDia;
   let conversaoDeRealParaBitcoin = valorDoImput * bitcoinDoDia;
   let conversaoRealParaLibraExterlina = valorDoImput / libraDoDia;

   if (primeiroSeletor == "real" && segundoSeletor == "dolar") {// va

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversaoRealParaDolar);

     

   } else if (primeiroSeletor == "real" && segundoSeletor == "bitcoin") {


      value2.innerHTML =
         new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"

         }).format(conversaoDeRealParaBitcoin);

   
  

   } else if (primeiroSeletor == "real" && segundoSeletor == "euro") {

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversaoDeRealParaEuro);

     

   } else if (primeiroSeletor == "real" && segundoSeletor == "libra") {

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversaoRealParaLibraExterlina);

   
    
   } else if (primeiroSeletor == "real" && segundoSeletor == "real") {

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(valorDoImput);



   }


   convertDolar();
   
   

}

function convertcurrencyDolar() {

}

function convertDolar() {
    
   // variaveis de conversao
   const dolarDoDia = 5.05;
   const euroDoDia = 0.19;
   const bitcoinDoDia = 0.0000072;
   const libraDoDia = 0.16;

   const valorReal = 5.04;

   const primeiroSeletor = document.querySelector(".box_select_one").value
   const conversaoDolarParaReal = valorReal * value1.innerHTML;
   const segundoSeletor = document.querySelector(".box_select_two").value;
     
   // isso sera alterado 
  // let conversaoRealParaDolar = valorDoImput / dolarDoDia;
  // let conversaoDeRealParaEuro = valorDoImput * euroDoDia;
  // let conversaoDeRealParaBitcoin = valorDoImput * bitcoinDoDia;
  // let conversaoRealParaLibraExterlina = valorDoImput / libraDoDia;

   if (primeiroSeletor == "dolar" && segundoSeletor == "real") {// va

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(conversaoDolarParaReal);

     

   } 
}