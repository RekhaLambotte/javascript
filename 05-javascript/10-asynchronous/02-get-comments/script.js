/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 * 
 * document.querySelector("#run").addEventListener("click", function(){
        window.lib.getPosts((error,array) => {
            if(error){
                console.log(error);
            }else{
                console.log(array);
            }
        })
    })
 * 
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    // document.querySelector("#run").addEventListener("click", function(){
    //     window.lib.getPosts((error,array) => {
    //         if(error){
    //             console.log(error);
    //         }else{
    //             console.log(array);
    //         }
    //     })
        
    // })

    // document.querySelector("run").addEventListener("click", function(){
    //     window.lib.getComments()
    // })
    
    function post(error,array){
        console.log(error);
        console.log(array);
    }

    function com(error,comments){
        console.log(error)
        console.log(array)
    }
 
     document.querySelector("#run").addEventListener("click", function(){
         window.lib.getPosts(post)
         window.lib.getComments(com)
     })
    
})();
