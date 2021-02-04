/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
    	let r = Math.floor(Math.random() * 256);
    	let g = Math.floor(Math.random() * 256);
    	let b = Math.floor(Math.random() * 256);


    	document.body.style.background = "rgb(" + r + "," + g + "," + b +")";
    });

    /* alternate code vy max

		function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    */

})();
