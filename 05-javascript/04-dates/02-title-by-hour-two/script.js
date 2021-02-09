/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let d = new Date();
    let hour= d.getHours();
    let date = hour +':'+(d.getMinutes());
    let line= "17:30"
    console.log(date);
    console.log(line);

    if (date<line){
        document.getElementById("target").innerHTML = "Hello, it's " + date;
    }else{
        document.getElementById("target").innerHTML = "Good evening, it's " + date;
    }

})();
