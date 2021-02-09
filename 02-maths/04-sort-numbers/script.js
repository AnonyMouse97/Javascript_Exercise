/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let x = document.getElementById("numbers").value;
        let z = x.split(",");
        console.log(z);
        
		let y = [];

        for (let i = 0; i < z.length ; i++) {
        	y.push(parseFloat(z[i]));
        }

        y.sort(function(a, b){
        	return a - b;
        });

        alert("Y sont triés maintenant, t'es content ? \n"  + y);



    });

})();
