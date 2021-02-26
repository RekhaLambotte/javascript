/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const tar = document.querySelector("target");

    async function fet(){
        const response = await fetch("http://localhost:3000/heroes/")
        let rep = await response.json()
        console.log(rep)
    }


    document.querySelector("#run").addEventListener("click", function(){
        console.log(tar)
        fet()

    // Autre possibilité :

    // fetch("http://localhost:3000/heroes/")
    //     .then( (response)=> response.json()
    //     )// end of then
    //     .then( (data => console.log(data)
    //     ))
    })
})();
