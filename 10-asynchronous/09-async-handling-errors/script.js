/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.querySelector('#run').addEventListener('click', function () {

        async function getPerson() {
            try {
                const x = await window.lib.getPersons();
                console.log(x);
            } catch (error) {
                console.error(error)
            }
        }
        getPerson();

    });
})();
