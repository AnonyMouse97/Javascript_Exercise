/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
	document.querySelector('#pass-one').addEventListener('input', function(){
		let x = document.querySelector('#pass-one').value;
		document.querySelector('#pass-one').maxLength = 10;
		document.querySelector('#counter').innerHTML = `${x.length}/10`;
	});
})();
