/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 * 
 * 1- mettre le code dans un hover sur l'image
 * 2- récupérer la value de "data-image" de #source
 * 3- supprimer la value de src 
 * 4 - mettre l'étape 2 dans la src 
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* code détaillé
    document.querySelector("img").addEventListener("mouseover", function(){
        let image = document.querySelector("img");
        let x = document.createAttribute("src");
        let y = image.getAttribute("src");
        let z = image.getAttribute("data-hover");
        x.value = z;
        y.value = image.removeAttribute("src");
        image.setAttributeNode(x);
        console.log(image);
    })
 */

(function() {

    // your code here

    document.querySelector("img").addEventListener("mouseover", function(){
        let image = document.querySelector("img");
        let x = document.createAttribute("src");
        x.value = image.getAttribute("data-hover");
        image.getAttribute("src").value = image.removeAttribute("src");
        image.setAttributeNode(x);
        console.log(image);
    })
    
    

})();
