function getText() {
    var iditm = document.getElementById("entrada");
    return iditm.value;
}

function dataValidate(txtData) {
    if (txtData.length <= 0) {
        alert("Es necesario ingresar un texto para poder continuar...");
        ItemFocus("entrada");
        return false;
    }
    return true;
}

function ItemFocus(txtName) {
    var iditm = document.getElementById(txtName);
    iditm.focus();
}

function setReset() {
    var iditm = document.getElementById("idtitle");
    iditm.innerText = "Ningún mensaje fue encontado";
    iditm = document.getElementById("idresult");
    iditm.innerText = "Ingresa el texto que desees encriptar o desencriptar";
    iditm = document.getElementById("entrada");
    iditm.value = "";
    ItemFocus("entrada");
}

function Crypto(txtData) {

    var txtinput = getText();
    if (!dataValidate(txtinput)) return;


    var iditm = document.getElementById("idtitle");
    iditm.innerText = "Encriptando Datos...";
    iditm = document.getElementById("entrada");
    iditm.value = "";

    var itm = "";
    var rst = "";
    for (var i = 0; i < txtinput.length; i++) {
        itm = txtinput.charAt(i);
        if (itm == "a")
            rst += "ai";
        else if (itm == "e")
            rst += "enter";
        else if (itm == "i")
            rst += "imes";
        else if (itm == "o")
            rst += "ober";
        else if (itm == "u")
            rst += "ufat";
        else
            rst += itm;
    }

    iditm = document.getElementById("idtitle");
    iditm.innerText = "Datos Encriptados...";
    iditm = document.getElementById("idresult");
    iditm.innerText = rst;

    alert("Hemos terminado, revise el resultado.");

}

function DCryto(txtData) {
    var txtinput = getText();
    if (!dataValidate(txtinput)) return;

    var iditm = document.getElementById("idtitle");
    iditm.innerText = "Desencriptando Datos...";
    iditm = document.getElementById("entrada");
    iditm.value = "";

    txtinput = txtinput.replaceAll("ai", "a");
    txtinput = txtinput.replaceAll("enter", "e");
    txtinput = txtinput.replaceAll("imes", "i");
    txtinput = txtinput.replaceAll("ober", "o");
    txtinput = txtinput.replaceAll("ufat", "u");

    iditm = document.getElementById("idtitle");
    iditm.innerText = "Datos Desencriptados...";
    iditm = document.getElementById("idresult");
    iditm.innerText = txtinput;

    alert("Hemos terminado, revise el resultado.");

}

function Copiar() {
    iditm = document.getElementById("idresult");
    navigator.clipboard.writeText(iditm.innerText);
    alert("Información copiada al portapapeles.");
    ItemFocus("entrada");
}