/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	
    // your code here
    document.querySelector('#target').innerHTML = parseInt(localStorage.getItem('increment'));
    
    document.querySelector('#increment').addEventListener('click', function(){
    	let increment = parseInt(localStorage.getItem('increment'));
    	localStorage.setItem('increment', ++increment);
    	document.querySelector('#target').innerHTML = increment;
    });
    //console.log(x);
})();
