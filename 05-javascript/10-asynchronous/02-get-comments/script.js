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
 
     document.querySelector("#run").addEventListener("click", function(){
        window.lib.getPosts((error,allpost) => {

            if(error){
                console.error(error)
            }else{
                allpost.forEach(post => {
                    window.lib.getComments( post.id,(error,comment)=>{
                       post.comment=comment
                       if(error){
                           console.error(error)
                       }

                    })
                    console.log(post.id)
                    console.log(allpost);
                });
                
                
            }
            })
        })
                
    
    
})();
