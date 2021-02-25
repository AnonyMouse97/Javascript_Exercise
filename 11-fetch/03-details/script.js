/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const clone = document.querySelector('#tpl-hero').cloneNode(true).content;
    document.querySelector('#target').appendChild(clone);

    async function getHeroes() {
        try {
            const x = await fetch('http://localhost:3000/heroes');
            const y = await x.json();

            y.forEach(element => {
                let z = document.querySelector('#hero-id').value;
                if (element.id == z) {
                    document.querySelector('.name').innerHTML = element.name;
                    document.querySelector('.alter-ego').innerHTML = element.alterEgo;
                    document.querySelector('.powers').innerHTML = element.abilities.join('. ');
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    document.querySelector('#run').addEventListener('click', function () {
        getHeroes();
    });
})();
