/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    

    document.getElementById("run").addEventListener("click", function(){

        let d = new Date();
        let day= d.getDate();
        let month= d.getMonth();
        let year= d.getFullYear();
        let date = day +'-'+(month)+'-'+year;

        let dayVisitor=document.getElementById("dob-day").value;
        let monthVisitor=document.getElementById("dob-month").value;
        let yearVisitor=document.getElementById("dob-year").value;
        let dateVisitor= dayVisitor +'-'+ monthVisitor +'-'+ yearVisitor;
        
        let age= (d.getFullYear()-yearVisitor-1) + " year ";
        
        console.log(date);
        console.log(dateVisitor);
        alert( "You are "+ age);
    })
    

})();
