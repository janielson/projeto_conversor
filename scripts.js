const convertButton = document.querySelector(".convert_button");


function convertCurrency() {

   const valueInput = document.querySelector(".input_values").value
   const valuetoConvertReal = document.querySelector(".currency_value_to_convert")
   const valueconverted = document.querySelector(".currency_value");
   

   const dolartoday = 5.2

   const dolarconversion = valueInput / dolartoday

   valuetoConvertReal.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL"
   }).format(valueInput)

   valueconverted.innerHTML = new Intl.NumberFormat("en-US" , {
    style:"currency",
    currency:"USD"
   }).format(dolarconversion)



 
}

convertButton.addEventListener("click", convertCurrency);