/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.querySelector("#run").addEventListener("click", function(){
        window.lib.getPersons((error,array)=>{
            console.log(error)
            console.error()
            console.log(array)
            
            if(error){
                console.error(error)
                return; // arret l'exécution , comme un break
            }else{
                console.log(array)
            }
            
        })
    })
})();
