/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*let table=document.getElementById("numbers").value;
        const tablesplit = table.split(",");
        var tableNum = parseInt(table,10);
        console.log(tableNum); */

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let table=document.getElementById("numbers").value;
        const tablesplit = table.split(",");
        const array1 = tablesplit;
        array1.sort(
            function(a,b){
                return a-b
            });
        alert(tablesplit);

    });

})();
