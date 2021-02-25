/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// let prom = window.lib.getPersons()
          
//           .then((value) => {
//             console.log(value);
//           })
//           .catch((error) => {
//             console.error(error);
//           });

(() => {
    // your code here

    // async va indiquer que la fonction doit être exécutée en asynchrone 
    // async est en dehors du click pour que la fonction s'exécute en parallèle. Ici la fonction ne r'envoie d'une donnée et n'a pas bcp de code a traiter donc async pourrait être dans le click. Mais il faut prendre l'habitude d'écrire à l'extérieur pour que le return soit rendu plus rapidement.
    // await permet de récupérer la la valeur de la fonction getPosts. Il remplace le .then d'une promise.
    // !! ici il n'y a pas d'affichage si le retour est négatif.
    async function promise(){  
        let prom = await window.lib.getPosts()
        console.log(prom)
    }

    document.querySelector("#run").addEventListener("click",function(){
        promise()
    })
    

})();
