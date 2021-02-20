/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }

        
    }
    // your code here
    document.getElementById("run").addEventListener("click",    function(){

        class dog extends Animal {
            constructor(name){
                super();
                this.name= name;
            }

            static get greeting(){
                return "Hellouf";
            }
    
        }

        class cat extends Animal {
            constructor(name){
                super();
                this.name= name;
            }

            static get greeting(){
                return "Goedmiaourning";
            }
    
        }
        
        

        let userdog = new dog("the dog")
        console.log(userdog.sayHello());
        let usercat = new cat("the cat")
        console.log(usercat.sayHello());
    })
})();
