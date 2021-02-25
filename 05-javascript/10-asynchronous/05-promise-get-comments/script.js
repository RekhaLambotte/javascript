/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// document.querySelector("#run").addEventListener("click", function(){
//     window.lib.getPosts((error,allpost) => {

//         if(error){
//             console.error(error)
//         }else{
//             allpost.forEach(post => {
//                 window.lib.getComments( post.id,(error,comment)=>{
//                    post.comment=comment
//                    if(error){
//                        console.error(error)
//                    }

//                 })
//                 console.log(post.id)
//                 console.log(allpost);
//             }); 
//         }
//     })
// })

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
A finir !!!!

(() => {
    // your code here

    document.querySelector("#run").addEventListener("click",function(){
        const prom1 = window.lib.getPosts((error,prom2)=>{
            
            // allPost.forEach(singlePost => {
            //        const prom2 = window.lib.getComments( singlePost.id,(error,comment)=>{
                               
            //         }) // end of getComments

            // });// end of forEach      
                
        })//end of getPosts

        const prom2 = window.lib.getComments((error, comment)=>{
            sgPost.forEach((sgPost.id,(comment,error)=>{
                singlePost.comment=comment 
            }))
        })


        prom1.then((value)=>{
            console.log(value)
        })

        prom2.then((val)=>{
            console.log(val)
        })
        

    })//end of document
})();
