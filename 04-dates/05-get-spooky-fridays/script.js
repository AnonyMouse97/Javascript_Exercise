/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    // your code here
    document.getElementById("run").addEventListener("click", function(){
    	
    	let year = document.getElementById('year').value;
    	let dates ='';
    	for (var i = 0; i <= 11; i++) {

    		let finalDate = new Date(year);

    		finalDate = finalDate.setDate(13);
    		finalDate = new Date(finalDate);
    		finalDate = finalDate.setMonth(i);
    		finalDate = new Date(finalDate);


    		let day = finalDate.getDay();
    		let date = finalDate.getDate();

    		if (day === 5 && date === 13) {
    			options = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
    			finalDate = finalDate.toLocaleDateString("en-US", options);
    			dates += '- ' + finalDate + '\n';
    		}else{

    		};

    		
    	}
    	

    	alert('the fridays 13th in ' + year + ' are : ' + '\n \n' + dates);

    });
    
    


})();
