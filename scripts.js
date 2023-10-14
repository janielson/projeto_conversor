
// aqui chamo os meus principais recursos para poder fazer a logica da minha aplicação 
const convertButton = document.querySelector(".convert_button");
const selectCurrency = document.querySelector(".box_select_two");


// aqui são os eventos junto com a duas funçoes da minha aplicação. um evento de "click" e outro de troca "change"
convertButton.addEventListener("click", convertCurrency);
selectCurrency.addEventListener("change", changeCurrency);



// essa funão faz toda a lógica da nossqa aplicação.
function convertCurrency() {

   const valueInput = document.querySelector(".input_values").value
   const valuetoConvertReal = document.querySelector(".currency_value_to_convert");
   const valueconverDolar = document.querySelector(".currency_value");




   const dolarToday = 5.08
   const euroToday = 5.34
   const btcToday = 136.81614
   const libraToday = 6.16



   valuetoConvertReal.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
   }).format(valueInput);




   if (selectCurrency.value == "DOLAR") {
      valueconverDolar.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(valueInput / dolarToday);

   }
   if (selectCurrency.value == "EURO") {
      valueconverDolar.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"


      }).format(valueInput / euroToday);


   }
   if (selectCurrency.value == "BITCOIN") {
      valueconverDolar.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "BTC"


      }).format(valueInput / dolarToday * btcToday);

   }

   if (selectCurrency.value == "LIBRA") {
      valueconverDolar.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "GBP"


      }).format(valueInput * libraToday);

   }



}


// essa função faz a troca de nome e de imagem da nossa aplicação 
function changeCurrency() {

   const convertname = document.getElementById("name_currency");
   const convertImg = document.querySelector(".img_converted")

   if (selectCurrency.value == "DOLAR") {
      convertname.innerHTML = "DOLAR"
      convertImg.src = "./assets/estados-unidos (1) 1.png"


   }

   if (selectCurrency.value == "EURO") {
      convertname.innerHTML = "EURO"
      convertImg.src = "./assets/euro.png"



   }
   if (selectCurrency.value == "LIBRA") {
      convertname.innerHTML = "LIBRA"
      convertImg.src = "./assets/libra.png"

   }
   if (selectCurrency.value == "BITCOIN") {
      convertname.innerHTML = "BTC BITCOIN"
      convertImg.src = "./assets/bitcoin.png"

   }

   convertCurrency()

}

