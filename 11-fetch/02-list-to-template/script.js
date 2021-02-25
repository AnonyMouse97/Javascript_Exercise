/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    async function getHeroes() {

        const x = await fetch('http://localhost:3000/heroes');
        const y = await x.json();

        y.forEach(({ name, alterEgo, abilities }) => {
            const clone = document.querySelector('#tpl-hero').cloneNode(true).content;

            clone.querySelector('.name').innerHTML = name;
            clone.querySelector('.alter-ego').innerHTML = alterEgo;
            clone.querySelector('.powers').innerHTML = abilities.join('. ');

            document.querySelector('#target').appendChild(clone);

        });
    }

    document.querySelector('#run').addEventListener('click', function () {
        getHeroes();
    });
})();
