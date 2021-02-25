/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    // your code here
    let obj = {};

    for (let i = 0 ; i < keys.length; i++) {
    	obj[keys[i]] = values[i];
    }

    //const arrayFusion = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));

	document.getElementById('run').addEventListener('click', function(){
    	console.log(obj);
	});
})();
/*
(or create array)
entries = new Map();
for
entries.set(keys[i].values[i]);
Object.fromEntries(entires)

*/
