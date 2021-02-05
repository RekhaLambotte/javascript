/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    /*function addTwoNumbers(textBox1, textBox2){
        var x=document.getElementById(textBox1).value;
        var y=document.getElementById(textBox2).value;
        var sum=0;
        sum=Number(x)+Number(y);
        alert("SUM is: " + sum);
        
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        let sum = (num1 + num2);

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition

        alert("Voici la réponse : " + sum);
    });*/

    document.getElementById("addition").addEventListener("click", function() {
        let x=document.getElementById("op-one").value;
        let y=document.getElementById("op-two").value;
        
        sum=Number(x)+Number(y);
        alert("Your total is: " + sum);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let x=document.getElementById("op-one").value;
        let y=document.getElementById("op-two").value;
        
        sub=Number(x)-Number(y);
        alert("Your total is: " + sub);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let x=document.getElementById("op-one").value;
        let y=document.getElementById("op-two").value;
        
        mul=Number(x)*Number(y);
        alert("Your total is: " + mul);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let x=document.getElementById("op-one").value;
        let y=document.getElementById("op-two").value;
        
        div=Number(x)/Number(y);
        alert("Your total is: " + div);
    });
})();
