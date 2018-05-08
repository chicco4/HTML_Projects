/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var valoresesso=null;
function controllaCAP() {
        if (document.eseform.cap.value.length != 5) {
            alert("Il CAP deve contenere 5 cifre");
            return false;
        }
        var v = parseInt(document.eseform.cap.value);
        if (isNaN(v)) {
            alert("Il CAP deve essere un numero");
            return false;
        }
        return true;
    }
    function controllaNome() {
        var v = parseInt(document.eseform.nome.value);
        if (!isNaN(v)) {
            alert("Il cognome e nome non può essere un numero");
            return false;
        }
        return true;
    }
    function validaInvio() {
        if (document.eseform.nome.value == "") {
            alert("Inserire cognome e nome");
            return false;
        }
        if (document.eseform.ateneo.value == "nessuno") {
            alert("Selezionare un ateneo");
            return false;
        }
        if ((document.eseform.lavoratore.checked) && (document.eseform.descr.value == "")) {
            alert("Hai dichiarato di essere uno studente lavoratore: devi compilare il campo descrizione lavoro");
            return false;
        }
        alert("Dati inseriti correttamente");
        return true;
    }