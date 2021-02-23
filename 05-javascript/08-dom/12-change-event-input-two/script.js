/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// regex pour controler si les 2 chiffres sont dans le input

(function() {

    // your code here
    let x = document.getElementById("pass-one");
    let y = document.getElementById("counter");
    document.getElementById("pass-one").addEventListener("keyup", function(){

        if(x.length> 8 && )
        y.innerHTML= `${x.value.length} /10`
        x.value=x.value.substring(0,9);
    })
})();
