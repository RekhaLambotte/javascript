/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const targetDoc = document.querySelector("#target");
    const template = document.querySelector("#tpl-hero").content;
     
    async function fet(){
        const response = await fetch("http://localhost:3000/heroes/")
        let rep = await response.json()
        
        for(i=0;i<rep.length;i++){
            const copyTemp = document.importNode(template,true)
            let egal= rep[i].id
            const heroInput = document.querySelector("#hero-id").value

            if(heroInput==egal){
                copyTemp.querySelector(".name").innerHTML = rep[i].name
                copyTemp.querySelector(".alter-ego").innerHTML =    rep[i].alterEgo
                copyTemp.querySelector(".powers").innerHTML = rep   [i].abilities

            targetDoc.appendChild(copyTemp)
            }   
        }   
    }

    document.querySelector("#run").addEventListener("click", function(){
        fet()  
    })
})();
