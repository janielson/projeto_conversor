
// aqui chamo os meus principais recursos para poder fazer a logica da minha aplicação 
const convertButton = document.querySelector(".convert_button");
const selectPrime = document.querySelector(".box_select_one");
const selectSecundary = document.querySelector(".box_select_two");
const text1 = document.querySelector(".currency");
const text2 = document.getElementById("name_currency");




// aqui são os eventos junto com a duas funçoes da minha aplicação. um evento de "click" e outro de troca "change"
convertButton.addEventListener("click", convertCurrency);
selectPrime.addEventListener('change' , trocaImagem1 );
selectSecundary.addEventListener('change' , trocaImagem2 );



function trocaImagem1() {
   const imagem1 = document.querySelector(".img_convert");
  
    if(selectPrime.value == "real") {
        imagem1.src = "./assets/brasil.png";
    } else if (selectPrime.value == "dolar" ) {
           imagem1.src = "./assets/estados-unidos.png";
    } else if(selectPrime.value == "euro" ) {
          imagem1.src = "./assets/euro.png";
 
    } else if(selectPrime.value == "libra") {
           imagem1.src = "./assets/libra.png";

    } else if (selectPrime.value == "bitcoin") {
            imagem1.src = "./assets/bitcoin.png";

    }
    
}

function trocaImagem2() {
   const imagem1 = document.querySelector(".img_convert");
  
    if(selectPrime.value == "real") {
        imagem1.src = "./assets/brasil.png";
    } else if (selectPrime.value == "dolar" ) {
           imagem1.src = "./assets/estados-unidos.png";
    } else if(selectPrime.value == "euro" ) {
          imagem1.src = "./assets/euro.png";
 
    } else if(selectPrime.value == "libra") {
           imagem1.src = "./assets/libra.png";

    } else if (selectPrime.value == "bitcoin") {
            imagem1.src = "./assets/bitcoin.png";

    }
    
}






function convertCurrency() {



   const primeiroSeletor = document.querySelector(".box_select_one").value
   const imagemDeTroca = document.querySelector(".img_converted");
   const segundoSeletor = document.querySelector(".box_select_two").value;

   // responsavel pelo calculo
   const valorDoImput = document.querySelector(".input_values").value;
   let valorExibidoPrimario = document.querySelector(".currency_value_to_convert");

   // valor exibido no final dos calculos
   let valorExibidoSecundario = document.querySelector(".currency_value");

  const modeloDaMoeda = document.getElementById("name_currency")


   // vai precisar exibir  em valor real 
   valorExibidoPrimario.textContent = valorDoImput;


   // variaveis de conversao
   const dolarDoDia = 5.05;
   const euroDoDia = 0.19;
   const bitcoinDoDia = 0.0000072;
   const libraDoDia = 0.16;
   

   let conversaoRealParaDolar = valorDoImput / dolarDoDia;
   let conversaoDeRealParaEuro = valorDoImput * euroDoDia;
   let conversaoDeRealParaBitcoin = valorDoImput * bitcoinDoDia;
   let conversaoRealParaLibraExterlina = valorDoImput / libraDoDia;

    console.log(conversaoDeRealParaBitcoin)

   if (primeiroSeletor == "real" && segundoSeletor == "dolar") {// va

   
      valorExibidoSecundario.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversaoRealParaDolar);

      imagemDeTroca.src = "./assets/estados-unidos.png";

   } else if (primeiroSeletor == "real" && segundoSeletor == "bitcoin") {

      

      valorExibidoSecundario.innerHTML = new Intl.NumberFormat("de-DE").format(conversaoDeRealParaBitcoin);

      modeloDaMoeda.innerHTML = "µBTC BITCOIN"
      imagemDeTroca.src = "./assets/bitcoin.png";

   } else if (primeiroSeletor == "real" && segundoSeletor == "euro") {

      
      valorExibidoSecundario.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversaoDeRealParaEuro);

      modeloDaMoeda.innerHTML = "€ EURO"
      imagemDeTroca.src = "./assets/euro.png"

   } else if (primeiroSeletor == "real" && segundoSeletor == "libra") {
      
      valorExibidoSecundario.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversaoRealParaLibraExterlina);

      modeloDaMoeda.innerHTML = "£ LIBRA"
      imagemDeTroca.src = "./assets/libra.png"

   } else if (primeiroSeletor == "real" && segundoSeletor == "real") {

     

      valorExibidoSecundario.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(valorDoImput);

      modeloDaMoeda.innerHTML = "R$ Brasileiro"
      imagemDeTroca.src ="./assets/brasil.png"
      
   
   }


}

// function  converteDeDolarParaOutrasMoedas( ) {
   
//    if (primeiroSeletor == "dolar" && segundoSeletor == "dolar") {

//       // altera a imagem primaria
//       valorExibidoSecundario.innerHTML = new Intl.NumberFormat("en-US", {

//          style: "currency",
//          currency: "USD"
//       }).format(valorDoImput);

//       imagemDeTroca.src = "./assets/estados-unidos.png";

//    } else if (primeiroSeletor == "dolar" && segundoSeletor == "bitcoin") {
//       valorExibidoSecundario.innerHTML = new Intl.NumberFormat("pt-BR",{
//          style: "currency",
//          currency: "BTC"
//       }).format(conversaoDeRealParaBitcoin);


//       imagemDeTroca.src = "./assets/bitcoin.png";

//    } else if (primeiroSeletor == "dolar" && segundoSeletor == "euro") {
//       valorExibidoSecundario.innerHTML = new Intl.NumberFormat("de-DE", {
//          style: "currency",
//          currency: "EUR"
//       }).format(conversaoDeRealParaEuro);


//       imagemDeTroca.src = "./assets/euro.png"

//    } else if (primeiroSeletor == "dolar" && segundoSeletor == "libra") {

//       valorExibidoSecundario.innerHTML = new Intl.NumberFormat("en-GB", {
//          style: "currency",
//          currency: "GBP"
//       }).format(conversaoRealParaLibraExterlina);

//       imagemDeTroca.src = "./assets/libra.png"

//    }

// }



