/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
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
            let id = parseInt(document.querySelector('#hero-id').value);
            object.forEach(element => {
                if (element.id == id) {
                    object.splice(object.indexOf(element), 1);
                }
            });
        };

        x.then(object => {
            getHeroes(object);
            console.log(object);
        });
    });
})();
