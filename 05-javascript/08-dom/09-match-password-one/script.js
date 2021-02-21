/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 * 
 * 1- récupérer la value de #pass-one
 * 2- récupérer la value de #pass-two
 * 3- comparer la value 1 à la 2
 * 4- fonction if else si 1===2 alors ok
 *      sinon changer les border des input en red
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
            document.querySelector("#pass-one").style.borderColor = "red";
            document.querySelector("#pass-two").style.borderColor = "red";
            alert ("You passwords are not the same")
            
        }
    }
})();
