/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let x =document.querySelector('img').getAttribute('data-hover');
    let y =document.querySelector('img').getAttribute('src');

    document.querySelector('img').addEventListener('mouseenter', function(){
    	document.querySelector('img').setAttribute('src', x);
    });
    document.querySelector('img').addEventListener('mouseout', function(){
    	document.querySelector('img').setAttribute('src', y);
    });
})();
