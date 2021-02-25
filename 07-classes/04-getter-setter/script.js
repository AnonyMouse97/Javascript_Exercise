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
    	}
		get getName(){
			return `${this.firstname} ${this.lastname}`;
		}
		set setName(text){
			let arrayName = text.split(' ');
			this.firstname = arrayName[0]; 
			this.lastname = arrayName[1];
		}
    }

    document.getElementById('run').addEventListener('click',function(){
    	const firstPerson = new Person();
		firstPerson.setName = 'nick Tamer';
		console.log(firstPerson.getName);
		firstPerson.setName = 'fizz deup'
		console.log(firstPerson.getName);
    });
})();
