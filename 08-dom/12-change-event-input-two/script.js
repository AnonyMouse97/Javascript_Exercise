/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
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
		let y = \d[0-9]{2}\w[a-zA-Z0-9_] ;
		if (y.test) {
			document.querySelector('#validity').innerHTML = 'ok';
		}else{
			document.querySelector('#validity').innerHTML = 'Not ok';
		}
		// /\d{2}
	});

})();
