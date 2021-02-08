/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    

    document.getElementById("run").addEventListener("click", function () {

        // your code here
        let n= document.getElementById("number").value;
        let res =1 ;

        if (n==0){
            console.log("1");
        }else if (n<0){
        console.log("erreur")  ;          
        }else{
            for (let i = 2; i <= n; i++) {
                res = res * i;
              }
            console.log("factoriel is "+ res);
        }
    });

})();

