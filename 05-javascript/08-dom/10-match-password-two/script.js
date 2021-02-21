/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 * 
 * const nvlTable = document.createElement("table")
// const table = ` <table></table>
//                 <thead<th> ${"Table"} </th>
//                 <th> ${"Table"} </th>
//                 <tr><td>${"row 1"}</td></tr>
//                 <tr><td>${"row 2"}</td></tr>

// nvlTable.innerHTML= table;
// document.getElementById("target").appendChild(nvlTable)
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").onclick = function() {

        let pass1= document.querySelector("#pass-one").value;
        let pass2= document.querySelector("#pass-two").value;
        
        
        if (pass1 == ""){
            document.querySelector("#pass-one").style.borderColor = "red";
            alert("Please complete Password")
        }else if (pass1 == pass2){
            alert ("Thank you")
        }else {
            document.querySelector("#pass-one").value="erreur";
            document.querySelector("#pass-two").value="erreur";
            
            
        }
    }

})();
