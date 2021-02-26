/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// async function one(){
//     try{
//         let prom = await window.lib.getPersons()
//         console.log(prom)
//     }catch(error){
//         console.error(error)
//     }    
// }
// document.querySelector("#run").addEventListener("click",function(){
//     one()
// })

(() => {
    // your code here
    //const img = document.querySelector("#cat");

    async function fet(){
        const response = await fetch("http://localhost:3000/heroes/")
        let rep = await response.json()
        console.log(rep)
    }
    
    document.querySelector("#run").addEventListener("click", function(){
        console.log("hello")
        fet()

    // Autre possibilité :

    fetch("http://localhost:3000/heroes/")
        .then( (response)=> response.json()
        )// end of then
        .then( (data => console.log(data)
        ))
    })
})();
