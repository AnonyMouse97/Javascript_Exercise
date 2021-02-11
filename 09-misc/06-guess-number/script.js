/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let x = Math.floor(Math.random()*100);
    let y = 1;
    let z = prompt('A guess ?');
    
   
    while(x != z && isNaN(z) == false){
    	if(x > z){
	    	alert("Higher !");
	    	y++;
	    	z = prompt('A guess ?');
	    }else if (x < z) {
	    	alert("Lower !");
	    	y++;
	    	z = prompt('A guess ?');
	    }
    }
    	
    if (z == x){
		alert("that's it!\n you needed " + y + " guesses");
    }
    if (isNaN(z)){
    	alert('bruh, "'+ z +'" is not a number...');
    }
   
    
})();
