let entrada = document.querySelector(".entrada");

entrada.addEventListener("keypress", function (event) {

    let regex = new RegExp('^[0-9]*\\.?[0-9]*$');
    let key = event.which;
    let character = String.fromCharCode(key);

    if (!regex.test(character)) {
        event.preventDefault();
        
    }

});



