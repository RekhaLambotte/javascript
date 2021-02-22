/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class Person {
        constructor (firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
    

    get name(){
        return "[firstname] [lastname]";

    }
    set nameSet(text){
        let arrName=text.split(" ")
        this.firstname=arrName[0]
        this.lastname=arrName[1]
        
    }
    }
    document.getElementById("run").addEventListener("click",    function(){
    var pers= new Person("Juliette","Gilt")
    var pers2= new Person()
    pers2.nameSet="Romeo Dupuis";
    console.log(pers)
    console.log(pers2)

    })

})();
