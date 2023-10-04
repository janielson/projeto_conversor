

var entrada = document.querySelector(".entrada");

entrada.addEventListener("keypress", function (event) {

    var regex = new RegExp('^[0-9]*$');
    var key = event.which;
    var character = String.fromCharCode(key);

    if (!regex.test(character)) {
        event.preventDefault();
    }

});









