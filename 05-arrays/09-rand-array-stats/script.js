/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // td n-1 -> n-10
    document.getElementById('run').addEventListener('click', function(){
    	let y = [];
    	for (var i = 0; i < 10; i++) {
    		let x = Math.floor(Math.random()*100);
    		document.getElementById('n-'+ (i +1)).innerHTML = x;
    		y.push(x);
    	}
    	let min = Math.min(...y);
    	let max = Math.max(...y);
    	let sum = y.reduce((a,b) => a + b);
    	let average = sum/y.length;

    	document.getElementById('min').innerHTML = min;
    	document.getElementById('max').innerHTML = max;
    	document.getElementById('sum').innerHTML = sum;
    	document.getElementById('average').innerHTML = average;
    });
})();
