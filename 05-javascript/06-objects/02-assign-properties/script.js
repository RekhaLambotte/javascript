/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*      people.forEach(function(element,index){
            totAge.push(element.age);  
        })
        const sum = totAge.reduce((a, b) => a $ {b}, 0);
        console.log("The total of sum is: " + sum)
        --------------------------------------------------------------
        Object.entries(computers).forEach(([key, value]) => {
                console.log(`${key} ${value}`)
            })*/


(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };

    
    // your code here

    document.getElementById("run").addEventListener("click", function(){
        
        for (const x in computers){ // pour chaque object du tableau computers, 
            if(computers[x].available == undefined){ //on va vérifier si la key available sest undefined ou non.
                y=defaultProps.available//si oui, on va chercher la value available de const defaultProps 
                computers[x].available=y ; // alors on ajoute cette valeur dans computers  
            }
            if(computers[x].os == undefined){ 
                z=defaultProps.os;
                computers[x].os=z ;
            }
            if(computers[x].user == undefined){ 
                a=defaultProps.user
                computers[x].user=a ;
            }
        }
        console.log(computers);
        
        

        
    });
})();
