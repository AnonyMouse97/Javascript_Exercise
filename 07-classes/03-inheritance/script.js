/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name){
            this.name= name;
        }
        static get greeting(){
              return '';  
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal{
        static get greeting(){
            return "Meaow";
        }
    }
    class Dog extends Animal{
        static get greeting(){
            return "Woof";
        }
    }
    // your code here
    document.getElementById('run').addEventListener('click',function(){
        let cat = new Cat('Cat');
        console.log(cat.sayHello());
        let dog = new Dog('Dog');
        console.log(dog.sayHello());
    });
})();
