/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let current = new Date();

    options = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
    let hour = current.getHours() + 'h' + current.getMinutes();
    finalDate = current.toLocaleDateString("en-EN", options) + ' , ' + hour;

    document.getElementById("target").innerHTML = finalDate;
    //Sunday 28 October 2018, 23h32

})();
