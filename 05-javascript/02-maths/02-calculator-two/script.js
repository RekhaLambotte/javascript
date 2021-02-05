/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  let x=document.getElementById("op-one").value;
    let y=document.getElementById("op-two").value;
        
        div=Number(x)/Number(y);
        alert("Your total is: " + div);*/

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    
    const performOperation = operation => {
        // perform the performOperation

        var x=document.getElementById("op-one").value;
        var y=document.getElementById("op-two").value;
        
        switch (operation) {
            case "addition":
                sum=Number(x)+Number(y);
                alert("Your total is: " + sum);
                break;
            case "substraction":
                sub=Number(x)-Number(y);
                alert("Your total is: " + sub);
                break;
            case "multiplication":
                mul=Number(x)*Number(y);
                alert("Your total is: " + mul);
                break;
            case "division":
                div=Number(x)/Number(y);
                alert("Your total is: " + div);
                break;
            default:
                alert("No result");
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
