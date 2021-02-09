/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
    	constructor(x,y){
    		this.firstname = x;
    		this.lastname = y;
    		this.name = `${this.firstname} ${this.lastname}`
    	}
    }

    document.getElementById('run').addEventListener('click',function(){
    	let person = new Person('Nick', 'Tamer');
    	console.log(person);
    	person = new Person('Fizz', 'Deup')
    	console.log(person);
    });
})();
