/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let x = document.querySelector('#pass-one').value;
    let y = document.querySelector('#pass-two').value;

    document.querySelector('#run').addEventListener('click', function(){
    	if (x != y) {
    		document.querySelector('#pass-one').style.border = "1px solid red";
    		document.querySelector('#pass-two').style.border = "1px solid red";
    	}else{
    		document.querySelector('#pass-one').style.border = "1px solid silver";
    		document.querySelector('#pass-two').style.border = "1px solid silver";
    	}
    });

})();
