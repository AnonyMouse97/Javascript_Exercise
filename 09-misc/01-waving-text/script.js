/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let x = document.getElementById('target').textContent;
    let words = [];
    words.push(x.slice(0,8));
    words.push(x.slice(9,26));
    words.push(x.slice(27,33));
    words.push(x.slice(34,40));
    words.push(x.slice(41,));

    document.getElementById('target').innerHTML = '';

    for (var i = 0 ; i < words.length; i++) {
        let y = Math.floor(Math.random()*4);
    	let p = document.createElement('p');
        p.setAttribute('style', `font-size : ${y}em ; display: inline;`)
        p.innerHTML = words[i];
    	document.getElementById('target').appendChild(p);
    }
    
})();
