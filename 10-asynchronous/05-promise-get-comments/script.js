/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.querySelector('#run').addEventListener('click', function () {
        window.lib.getPosts(() => {
        }).then((x) => {
            x.forEach(element => {
                window.lib.getComments(() => {
                }).then((comment) => {
                    element.comments = comment;
                });
            });
            console.log(x);
        })
    });

})();
