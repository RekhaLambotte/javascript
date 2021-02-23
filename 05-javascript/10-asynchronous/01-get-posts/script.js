/* becode/javascriptasync function fonctionAsynchrone3() {
 const value1 = await fonctionAsynchrone1();
 const value2 = await fonctionAsynchrone2();
 return value1 + value2;
}
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 * 
 * 
 * 
 * window.lib.getPosts((error,array) => {
            if(error){
                console.log(error);
            }else{
                console.log(array);
            }
        })

    peut être écrite 
    window.lib.getPosts(function (error,array) {
            if(error){
                console.log(error);
            }else{
                console.log(array);
            }
        })
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    

    document.querySelector("#run").addEventListener("click", function(){
        window.lib.getPosts((error,array) => {
            if(error){
                console.log(error);
            }else{
                console.log(array);
            }
        })
    })

})();
