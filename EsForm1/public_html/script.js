/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validateForm() {
    var a = document.forms["myForm"]["cognome"].value;
    var b = document.forms["myForm"]["nome"].value;
    var c = document.forms["myForm"]["matricola"].value;
    var d = document.forms["myForm"]["regione"].value;
    var e = document.forms["myForm"]["email"].value;
    var f = document.forms["myForm"]["telefono"].value;
    var g = document.forms["myForm"]["richieste"].value;
    if (a == "") {
        alert("Inserire cognome");
        return false;
    }

    if (b == "") {
        alert("Inserire nome");
        return false;
    }
    if (isNaN(c)) {
        alert("Inserire numero come matricola");
        return false;
    }
    if (d == "defaultOption") {
        alert("Inserire regione");
        return false;
    }
    if (f || g == "") {
        alert("OK");
        return false;
    }
    alert("OK");
    return true;
}
