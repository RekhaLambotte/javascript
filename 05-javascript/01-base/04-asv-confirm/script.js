/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function namefunction() {

    var age=prompt(" How old are you? ");
    var gender=prompt(" Are you a Man or a Woman ");
    var town=prompt(" Where do you live? ");

    var all= confirm("Your age is " + age +"." + "Your are a " + gender + "." + "And you live in " + town + ".");

    if (all==true){
        alert("thanks");

    } else{
        return namefunction();
    }

})();
