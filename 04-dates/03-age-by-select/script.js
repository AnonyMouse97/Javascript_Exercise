/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {

        // take values from form
    	let day = document.getElementById("dob-day").value;
    	let month = document.getElementById("dob-month").value;
    	month = month  -1;
    	let year = document.getElementById("dob-year").value;

        // define birthdate
		let birthdate = new Date(year, month, day);

        // define currentdate w/o hours
        let current = new Date();
        let currentWoHours = new Date(current.getFullYear(), current.getMonth(), current.getDate());

        // compute years diff => age
        let yearsDiff = current.getFullYear() - birthdate.getFullYear();

        // remove years diff from current date to compare month and days
        let curWoYears = currentWoHours.setYear(currentWoHours.getFullYear() - yearsDiff);

        // put birthdate in mill
        birthdate = birthdate.getTime();

        // declare message
        let message ='';

        // compare both dates
        if (curWoYears === birthdate){
            message = 'Happy Birthday by the way !'
        }else if (curWoYears < birthdate) {
            message = 'You already had you birthday this year, be patient !'
        }
        else if (curWoYears > birthdate) {
            yearsDiff -= 1;
            message = 'Your Birthday is still to come this year, be patient !'
        }

        // birthdate back to date format
        birthdate = new Date(birthdate);

        alert('You were born on the : ' + birthdate.toLocaleDateString("en-US") + '\n \n' + "You're " + yearsDiff + ' years old' + '\n' + message);


    });

})();