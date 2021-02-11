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
		//let y = w
		if (x.match(^(?=.\w)(?=(.\d){2,})(?=.{8,}))) {
			document.querySelector('#validity').innerHTML = 'ok';
		}else{
			document.querySelector('#validity').innerHTML = 'Not ok';
			console.log('not OK');
		}

		// ^(?=.[a-z])(?=(.[0-9]){2,})(?=.{8,}))
	});

})();
