/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let array = []
    document.getElementById("run").addEventListener("click", function(){

        for (i=1; i<11; i++) {
            let x = Math.floor(Math.random()*100);
            document.getElementById("n-"+i).innerHTML=x;
            array.push(x);
        }
        console.log(array);
        document.getElementById("min").innerHTML= Math.min(...array);
        document.getElementById("max").innerHTML= Math.max(...array);
        const sum = array.reduce((a, b) => a + b, 0);
        document.getElementById("sum").innerHTML= (sum);
        const avg = (sum / array.length) || 0;  
        document.getElementById("average").innerHTML= (avg);        
        
    })

})();
