/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 * 
 * 
 * 
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// let x = document.getElementById("pass-one"); 
// let y = document.getElementById("counter");
// document.getElementById("pass-one").addEventListener("keyup", function(){
//     y.innerHTML= `${x.value.length} /10`

//     x.value=x.value.substring(0,9);
// })

(function() {

    // your code here
    let x = document.getElementById("pass-one");
    let y = document.getElementById("counter");
    document.getElementById("pass-one").addEventListener("keyup", function(){
        y.innerHTML= `${x.value.length} /10`
        x.value=x.value.substring(0,10);
    })

})();
