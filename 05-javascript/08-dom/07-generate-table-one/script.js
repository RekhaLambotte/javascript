/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

    const nvlTable = document.createElement("table")
    const table = ` <table>${"Table"} </table>
                    <tr><td>${"row 1"}</td></tr>
                    <tr><td>${"row 2"}</td></tr>
                    <tr><td>${"row 3"}</td></tr>
                    <tr><td>${"row 4"}</td></tr>
                    <tr><td>${"row 5"}</td></tr>
                    <tr><td>${"row 6"}</td></tr>
                    <tr><td>${"row 7"}</td></tr>
                    <tr><td>${"row 8"}</td></tr>
                    <tr><td>${"row 9"}</td></tr>
                    <tr><td>${"row 10"}</td></tr> `
    nvlTable.innerHTML= table;
    document.getElementById("target").appendChild(nvlTable)
})();
