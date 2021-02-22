/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 * 
 * 1-prendre la value de "data-image" via l'id "source"
 * 2-créer un element image dans l'id "target"
 * 3-ajouter la vualue récupérée de #source à #target
 * 4-afficher cette value
 * 5-remove #source
 * 
 * let y=document.querySelector("#source");
    let x= y.setAttribute("data-image")
    let z= x.value
    console.log(z)
 * 
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* 2 let target = document.getElementById("target");
    let x = document.createAttribute("data-image");
    x.value = "newVal"; --> 3.1- newVal a modifier pour mettre la value
    target.setAttributeNode(x);
    console.log(target); */
// 5- document.getElementById("source").removeAttribute("data-image")
//console.log(document.getElementById("source"))

/* code détaillé :
    let target = document.getElementById("target");
    let x = document.createAttribute("src");
    let source = document.getElementById("source");
    let y = source.getAttribute("data-image");
    x.value = y;
    target.setAttributeNode(x);
    document.getElementById("source").removeAttribute("data-image")
    console.log(target, source);
*/

(function() {
    // your code here
    
    // document.createAttribute("src").value = document.getElementById("source").getAttribute("data-image");
    // document.getElementById("target").setAttributeNode(document.createAttribute("src"));
    // document.getElementById("source").removeAttribute("data-image")
    // console.log(document.getElementById("source"));
    // console.log(document.getElementById("target"));

    let target = document.getElementById("target");
    let x = document.createAttribute("img");
    let source = document.getElementById("source");
    let y = source.getAttribute("data-image");
    x.value = y;
    target.setAttributeNode(x);
    document.getElementById("source").removeAttribute("data-image")
    console.log(target, source);
    
    
    
    
})();
