
// aqui chamo os meus principais recursos para poder fazer a logica da minha aplicação 
const convertButton = document.querySelector(".convert_button");
const selectPrime = document.querySelector(".box_select_one");
const selectSecundary = document.querySelector(".box_select_two");
const text1 = document.querySelector(".currency");
const text2 = document.getElementById("name_currency");
const value1 = document.querySelector(".currency_value_to_convert");
const value2 = document.querySelector(".currency_value");



// aqui são os eventos junto com a duas funçoes da minha aplicação. um evento de "click" e outro de troca "change"
convertButton.addEventListener("click", convertCurrency);
selectPrime.addEventListener('change' , trocaImagemETexto1 );
selectSecundary.addEventListener('change' , trocaImagemETexto2 );



function trocaImagemETexto1() {
   const imagem1 = document.querySelector(".img_convert");
  
    if(selectPrime.value == "real") {
        imagem1.src = "./assets/brasil.png";
        text1.innerHTML = "Real";

   //  alterar aqui

   value1.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(0.00); 

    } else if (selectPrime.value == "dolar" ) {
           imagem1.src = "./assets/estados-unidos.png";
           text1.innerHTML = "Dolar";
         
           
      value1.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(0.00);


    } else if(selectPrime.value == "euro" ) {
          imagem1.src = "./assets/euro.png";
          text1.innerHTML = "Euro";
   
         
          value1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
         }).format(0.00);
         

 
    } else if(selectPrime.value == "libra") {
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


    convertCurrency() 
    
}

function trocaImagemETexto2() {
   const imagem2 = document.querySelector(".img_converted");
  
    if(selectSecundary.value == "real") {
        imagem2.src = "./assets/brasil.png";
        text2.innerHTML = "Real";
        

        //  alterar aqui

   value2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
   }).format(0.00); 


    } else if (selectSecundary.value == "dolar" ) {
           imagem2.src = "./assets/estados-unidos.png";
           text2.innerHTML = "Dolar";

                 //  alterar aqui

   value2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
   }).format(0.00); 

    } else if(selectSecundary.value == "euro" ) {
          imagem2.src = "./assets/euro.png";
          text2.innerHTML = "Euro";
          

                //  alterar aqui

   value2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
   }).format(0.00); 

 
    } else if(selectSecundary.value == "libra") {
           imagem2.src = "./assets/libra.png";
           text2.innerHTML = "Libra";

                 //  alterar aqui

   value2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
   }).format(0.00); 
           
    } else if (selectSecundary.value == "bitcoin") {
            imagem2.src = "./assets/bitcoin.png";
            text2.innerHTML = "Bitcoin";


                  //  alterar aqui

   value2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
   }).format(0.00); 


    }
    
}






function convertCurrency() {



   const primeiroSeletor = document.querySelector(".box_select_one").value 
   const imagemDeTroca = document.querySelector(".img_converted");
   const segundoSeletor = document.querySelector(".box_select_two").value;

   // responsavel pelo calculo
   const valorDoImput = document.querySelector(".input_values").value;
   const valorExibidoPrimario = document.querySelector(".currency_value_to_convert");

   // valor exibido no final dos calculos
   const valorExibidoSecundario = document.querySelector(".currency_value");

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

      // alterar a valorExibidoSecundario  para value2
      valorExibidoSecundario.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversaoRealParaDolar);

      imagemDeTroca.src = "./assets/estados-unidos.png";

   } else if (primeiroSeletor == "real" && segundoSeletor == "bitcoin") {

      
          // alterar a valorExibidoSecundario  para value2
      valorExibidoSecundario.innerHTML =
        new Intl.NumberFormat("en-US",{
         style: "currency",
         currency:"BTC"

        }).format(conversaoDeRealParaBitcoin);

      modeloDaMoeda.innerHTML = "µBTC BITCOIN"
      imagemDeTroca.src = "./assets/bitcoin.png";

   } else if (primeiroSeletor == "real" && segundoSeletor == "euro") {

          // alterar a valorExibidoSecundario  para value2
      valorExibidoSecundario.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversaoDeRealParaEuro);

      modeloDaMoeda.innerHTML = "€ EURO"
      imagemDeTroca.src = "./assets/euro.png"

   } else if (primeiroSeletor == "real" && segundoSeletor == "libra") {
   
          // alterar a valorExibidoSecundario  para value2
      valorExibidoSecundario.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversaoRealParaLibraExterlina);

      modeloDaMoeda.innerHTML = "£ LIBRA"
      imagemDeTroca.src = "./assets/libra.png"

   } else if (primeiroSeletor == "real" && segundoSeletor == "real") {

     
          // alterar a valorExibidoSecundario  para value2
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



