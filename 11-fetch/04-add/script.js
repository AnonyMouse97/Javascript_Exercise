/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code her
    async function getData() {
        try {
            const data = await fetch('http://localhost:3000/heroes');
            const object = await data.json();
            return object;

        } catch (error) {
            console.error(error);
        };
    }

    let x = getData();

    document.querySelector('#run').addEventListener('click', function () {
        function getHeroes(object) {
            let name = document.querySelector('#hero-name').value;
            let alterEgo = document.querySelector('#hero-alter-ego').value;
            let power = document.querySelector('#hero-powers').value;

            object.push({ id: object.length + 1, name: name, alterEgo: alterEgo, abilities: [power] });
        };

        x.then(object => {
            getHeroes(object);
            console.log(object);
        });
    });
})();
