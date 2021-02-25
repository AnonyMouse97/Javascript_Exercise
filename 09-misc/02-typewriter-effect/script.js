/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let x = document.getElementById('target').textContent;
    let i = 0;
    let y = '';
    let rand = Math.floor(Math.random()*100);
    setInterval(function(){
    	y = y + x.charAt(i);
    	document.getElementById('target').innerHTML = y;
    	i++;
    },rand);
   
})();
