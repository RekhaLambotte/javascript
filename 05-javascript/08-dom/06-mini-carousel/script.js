/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 * 
 * 
 let x = document.querySelector("img")
        let y = x.getAttribute("src")
        let z = gallery[2];
        y= z
        console.log(y)
        console.log(z)
 
 
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

    i=1

    document.getElementById("next").addEventListener("click", function(){
        let image = document.querySelector("img"); // sélection de la balise img
        let z = gallery[i];
        image.setAttribute("src",z)
        if(i<gallery.length-1){
            i++;
        }else{
            i=0
        }
        
        console.log(i);
        console.log(z);

    })

})();
