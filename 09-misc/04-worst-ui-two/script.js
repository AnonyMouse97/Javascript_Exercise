/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //
    let original = document.querySelector('#target').textContent;
    
    String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
	}

	original.replaceAt()


    /*function modifyText(start, end, arr, i){
    	//i++;
    	sliced = parseInt(original.slice(start,end));
    	var added = sliced + i;
    	numbers[arr] = added;
    	//console.log(added);
    	//add /replace to string store in var and push at index
    	//console.log(original);
    	return numbers;
    }
	
	let numbers = [460, 0, 0, 0];
	let i = 0;
	//ar number = '+'*/
    const getButtons = button =>{
    	switch(button){
    		case 'part-one':
    		
    		break;
    		case 'part-two':
    		
    		break;
    	}
    }
    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (getButtons($btn.id)),
        ),
    );

    //document.querySelector('#target').innerHTML
    //console.log(numbers);
})();
