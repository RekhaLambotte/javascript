/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// const nvlTable = document.createElement("table")
// const table = ` <table></table>
//                 <thead<th> ${"Table"} </th>
//                 <th> ${"Table"} </th>
//                 <tr><td>${"row 1"}</td></tr>
//                 <tr><td>${"row 2"}</td></tr>
//                 <tr><td>${"row 3"}</td></tr>
//                 <tr><td>${"row 4"}</td></tr>
//                 <tr><td>${"row 5"}</td></tr>
//                 <tr><td>${"row 6"}</td></tr>
//                 <tr><td>${"row 7"}</td></tr>
//                 <tr><td>${"row 8"}</td></tr>
//                 <tr><td>${"row 9"}</td></tr>
//                 <tr><td>${"row 10"}</td></tr> `
// nvlTable.innerHTML= table;
// document.getElementById("target").appendChild(nvlTable)

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

!!!! A finir 

(function() {

    // your code here

    var result = 'x ';
    for (var i = 0; i < 11; i++) {

        for (var z = 0; z < 11; z++) {
            const nvlTable = document.createElement("table")
            if(i == 0 && z > 0){
                col= '[' + z + ']';
                console.log(col)
                const table = ` 
                    <th> ${col} </th>
                    `
                nvlTable.innerHTML= table;
                document.getElementById("target").appendChild(nvlTable)
            } 
            else if(z == 0 && i>0){
                col= '[//' + i + '//] ';
                console.log(col)
                const table = ` 
                    <th> ${col} </th>
                    `
                nvlTable.innerHTML= table;
                document.getElementById("target").appendChild(nvlTable)
            } 
            else if(i>0 && z>0){
                col= (i*z) + ' ';
                console.log(col)
                const table = ` 
                    <th> ${col} </th>
                    `
                nvlTable.innerHTML= table;
                document.getElementById("target").appendChild(nvlTable)
            }
        }
        result += '\n'
    }
    
    //console.log(result);

    
    // const table = ` <table></table>
    //                 <th> ${colmn} </th>
    //                 <tr><td>${result}</td></tr>`
    // nvlTable.innerHTML= table;
    //document.getElementById("target").appendChild(nvlTable)

})();
