'use strict';

// YOU KNOW WHAT TO DO //

/*
*
* indentity: Returns the given value unchanged.
*
* @param {value} value: Input value can be any datatype.
*
* @return {Value}: The value returned will be the same as the input value unaltered.
*/

    //Usage:
    
    function identity(value) {
            return value;
        }
        
        identity('hello'); //Will return 'hello'



/**
 * typeOf: Returns the type of <value> as a string.
 * 
 * @param {value}: The <value> input can be any datatype.
 * 
 * @return {string}: a string will be returned that signifies what type of
 * datatype <value> is.
 * 
*/

    //Usage:
    
        function typeOf(value) {
                if(typeof value === 'string') {
                    return 'string';
                } else if (typeof value === 'number') {
                    return 'number';
                } else if (value === null || typeof value === 'null') {
                    return 'null'
                } else if (Array.isArray(value) === true) {
                    return 'array'
                } else if (typeof value === 'undefined' || value === undefined) {
                    return 'undefined';
                } else if(typeof value === 'function') {
                    return 'function';
                } else {
                    return 'object'
                }
            }

        typeOf({firstName: 'Teamer', lastName: 'Tibebu'}); //Will return 'object'

/**
 * first: This function takes in an <array> and <number> as it's inputs and returns the 
 * first <number> of items in <array>.
 * 
 * @param {array}: will be accessed to return a set of elements.
 * @param {number}: this numerical value will tell the function how many elements
 * to return from the beginning of the input array.
 * 
 * @return: The function will return the first <number> of items in <array>. 
 * If <number> is not given, the first element will be returned, if <number> 
 * is negative, an empty array literal will be returned, if <number> is greater than 
 * the length of the array, the whole array will be returned, and if <array> 
 * is not an array, an empty array literal will be returned.
 * 
 * 
 */
 
 
    //Usage:
        let nums = [1, 2, 3, 4, 5, 6];
        
        function first(array, number) {
    
            if(Array.isArray(array) === false) {
            //Use Array.isArray() to check if array is an array. If it is not, return
            //an empty array literal.
                return [];
            } else if(typeof number !== 'number') {
            //Use typeof to check if number is a number. If it is not or if number is
            //undefined, return the first element in array.
                return array[0];
            } else if(number < 0) {
            //If number is negative, return an empty array literal.
                return [];
            } else if(number > array.length) {
            //If number is greater than the length of the array, return the whole array.
                return array;
            } else {
            //Else, return the first <number> items of array. Use slice to complete this.
                return array.slice(0, number);
            }
    
        };
        
        first(nums, 3); //Will return [1,2,3]
        


/**
 * last: This function will return the last <number> of elements from <array>.
 * 
 * @param {array}: The array input is the collection that we will use to return a 
 * specified number of elements from. 
 * 
 * @param {number}: The number input tells us to return the last <number> elements
 * of <array>.
 * 
 * @return: The function will return the last <number> elements from <array>.
 * If <array> is not an array or <number> is a negative value it will return an 
 * empty array literal, if <number> is not given or not a number it will return 
 * the last element of <array>, and if <number> is greater than the length of the
 * array it will return the entire array.
 * 
 */
 
 
    //Usage:
    
        function last(array, number){
            if(Array.isArray(array) === false){ //if it's not an array, return empty array literal
                return [];
            //if it's not null or undefined or a number, return the last element in the input array    
            } else if(number === null || number === undefined || typeof number !== 'number'){ 
                return array[array.length - 1];
            } else if(number > array.length){ //if input number is bigger than length of given array return whole array
                return array;
            } else if(number < 0){ //if input number is negative, return empty array literal
                return [];
            } else { //else, return the indices from the given number to the end of the array
                return array.slice(array.length - number, array.length);
            }
        };
    
    let lastArr = [1,2,3,4,5,6]
    last(lastArr, 3); //Will return [4,5,6]
        
 
 
 /**
  * indexof: This function will return the index of the first occurance of <value>
  * in <array>.
  * 
  * @param {array}: The array is whats to be iterated through to find the index 
  * of the first occurence of <value>.
  * 
  * @param {value}: <value> will be checked against <array> to find the index
  * of it's first occurence.
  * 
  * @return: This function will return the index of the first occurence of <value>
  * in <array>. If <value> does not exist in <array>, it will return -1, 
  * 
  */
  
  
    //Usage:
    
        function indexOf(array, value) {
            //Use a for loop to iterate through array to return the index of the 
            //first occurence of value.
            for(let i = 0; i < array.length; i++) {
                if(array[i] === value) {
                    return i;
                }
            }
            //If value is not in array, return -1.
            return -1;
        };
        
        let indexOfArr = [3,4,3,5,6,6,6,7];
        indexOf(indexOfArr, 6); //Will return 4
        
        
        
/**
 * contains: This function will iterate through <array> and check if it contains
 * <value>.
 * 
 * @param {array}: The collection to be iterated through to search for <value>.
 * 
 * @param {value}: The value will be checked against <array> to see if it exists.
 * 
 * @return: This function will return true if <array> contains <value>, false
 * otherwise.
 * 
 */
 
 
    //Usage:
    
        function contains(array, value) { //accepts an array and a value
            //using ternary operator, return true if array contains value, false if not
            return (array.includes(value)) ? true : false; 
        };
        
        let containsArr = ['Teamer', 'hello world', 9, true];
        contains(containsArr, 'Tibebu'); //Will return false.

    
    
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * @return: This function contains no return. Instead, the function takes in a 
 * collection and applies a function to it.
 */
 
    //Usage:
    
        function each(collection, action) {
            if(Array.isArray(collection)) {
                for(var i = 0; i < collection.length; i++) {
                    action(collection[i], i, collection);
                }
            } else {
                for (var key in collection) {
                    action(collection[key], key, collection);
                }
            }
        }
        
        let vals = [1,2,3,4,5]
        let double = []
        each(vals, function(val){
            double.push(val * 2)
        }); 

        console.log(double); //Will log [ 2, 4, 6, 8, 10 ]
        
        
        
 /**
 * unique: This function will take an array and return a new array of all it's
 * elements w/ duplicates removed.
 * 
 * @param {array}: This function will take an array of values which may or may
 * not have duplicate elements.
 * 
 * @return: This function will return us a NEW array with all of the originals
 * elements with duplicates removed.
 * 
 */
 
    //Usage:
    
        function unique(array) {
            let newArray = [];
            for(let i = 0; i < array.length; i++) {
                if(newArray.indexOf(array[i]) === -1) {
                    newArray.push(array[i])
            }
            
        }
            return newArray;
        } 
        
        let arr = [1,1,1,3,4,5,2,3,4,3,4,5,8,9,8]

        arr.unique; //Will return [1,3,4,5,2,8,9]
        
        
        
/**
 * filter: This function will call a given function on all the elements from the
 * given array and return a new array of all elements for which calling the 
 * function returns true.
 * 
 * @param {array}: This function will take an array that will be acted on by 
 * the given function.
 * 
 * @param {func} Function: This function will also take a function to be called
 * on each element to test its truthyness.
 * 
 * @return: This function will return a new array of all elements for which
 * calling the given function returns true.
 * 
 */
 
 
    //Usage:
    
        function filter(array, func) {
            var resultArray = [];
          
            for(let i = 0; i < array.length; i++) {
                if(func(array[i], i, array) === true) {
                    resultArray.push(array[i]);
                }
        }
            return resultArray;
        }
        
        let ages = [20,45,32,12,34,76,54,55,64,34,87,56]
        
        ages.filter(age => age > 50) // Will return [ 76, 54, 55, 64, 87, 56 ]
        
        

/**
 * reject: This function will call a given function on each element of the given
 * array and return a new array of all elements for which calling the function
 * returns false.
 * 
 * @param {array}: This function takes an array of elements for which to call 
 * the given function on.
 * 
 * @param {func} Function: This function will take a function that will be called on
 * every element of the given array.
 * 
 * @return: This function will return a new array containing the elements of the
 * given array for which calling the function returns false.
 * 
 */
 
 
    //Usage:
    
        function reject(array, func) {
    
            var falseArray = [];
            
            for(let i = 0; i < array.length; i++) {
                if(func(array[i], i, array) === false) {
                    falseArray.push(array[i]);
                }
                
            }
            return falseArray;
            
        };
        
        let friends = ['Teamer', 'Henny', 'Senai', 'Abel', 'Adal'];

        reject(friends, name => name.length > 4); //[ 'Abel', 'Adal' ]
        
        
        
/**
 * partition: This function will call a given function on each element of a given
 * array and return a new array containing two subarrays, one for which call the 
 * given function returns truthy, the other containing elements which return falsey.
 * 
 * @param {array}: This function will take an array of elements to be applied
 * a function.
 * 
 * @param {func} Function: This function will take a function which will be called on
 * each element of the given array.
 * 
 * @return: This function will return a new array containing two subarrays, one 
 * which contains all the truthy elements and the other containing all falsey elements.
 * 
 */
        
        //Usage:
        
            function partition(array, func) {

                var truthyArray = [];
                var falsyArray = [];
                var joinedArray = [];
               
                for(let i = 0; i < array.length; i++) {
                    if(func(array[i], i, array) === true) {
                        truthyArray.push(array[i]);
                    } else if (func(array[i], i, array) === false) {
                        falsyArray.push(array[i]);
                    }
                }
                
                joinedArray.push(truthyArray, falsyArray)
                
                return joinedArray;
                
            };
            
              let allAges = [45,32,33,45,32,12,23,24,28,78,64]

              partition(allAges, function(age) {
                return age < 35
              }) //Will return [ [32, 33, 32, 12, 23, 24, 28], [ 45, 45, 78, 64 ] ]

            
            
/**
 * map: This function will call a given function on each element of a given 
 * collection and return a new array containing all the return values.
 * 
 * @param {collection}: This function will take either an array or an object.
 * 
 * @param {func} Function: This function will take a function that will act on
 * the elements of the given collection.
 * 
 * @return: The function will return a new array containing all the return values.
 * 
 */
 
 
    //Usage:
    
        _.map = function(collection, func) {
    
            var aNewArray = [];
            
            if(Array.isArray(collection)) {
                for(let i = 0; i < collection.length; i++) {
                    var arrayArray = func(collection[i], i, collection);
                    aNewArray.push(arrayArray);
                }
            
            } else if(collection !== null || typeof collection === 'object') {
                for(let key in collection) {
                    var objectArray = func(collection[key], key, collection)
                    aNewArray.push(objectArray);
                }
            }  
            
            return aNewArray;
            
        };
        
          let index = [1,2,3,4,5,6,7];

          map(index, function(ind, i) {
            return ind * 2
          }); //Will return [2,  4,  6, 8, 10, 12, 14]
          
          
          

/**
 * pluck: This function utilizes map to return an array containing the value of 
 * <property> for every element in <array>.
 * 
 * @param {array}: This function takes an array of objects.
 * 
 * @param {property}: This function also takes a property.
 * 
 * @return: Returns an array containing every value of <property> for every
 * element in <array>.
 * 
 */
 
 
    //Usage:
    
        _.pluck = function(arrayOfObj, property) {
            
           return arrayOfObj.map((element, index, arrayOfObj) => {
               
                return element[property]
           })
    
        }
        
        let friendsList = [
            {firstName: 'Senai', lastName: 'Ayalew'},
            {firstName: 'Henny', lastName: 'Samuel'}]
            
            pluck(friendsList, 'firstName'); //Returns [Senai, Henny]



/**
 * every: This function calls a given <func> on every element of a collection. 
 * If the return value of calling <func> for every element is true, return true. 
 * If even one returns false, this function returns false.
 * 
 * @param {collection}: This function can either take an array or object.
 * 
 * @param {func}: This function will take in a <func> that will be called w/
 * every element of the collection.
 * 
 * @return: If the return value of calling <func> for every element is true, this 
 * function will return true, if even one is false, it will return false.
 * 
 */

        
        //Usage:
        
            function every(collection, func){ 
            var bool = true; 
            if(Array.isArray(collection)){ 
                if(func == null || func === undefined) { 
                    for(let i = 0; i < collection.length; i++){ 
                        if(collection[i] === false) { 
                            bool = false; 
                            return bool; 
                        }
                    }
                    return bool; 
                } else { 
                    for(let i = 0; i < collection.length; i++){ 
                        if(func(collection[i], i, collection) === false) { 
                            bool = false; 
                            return bool; 
                        }
                    }
                }
                return bool; 
            } else if(collection !== null || typeof collection === 'object'){ 
                for(var key in collection){ 
                    if(func(collection[key], key, collection) === false) { 
                        bool = false;
                        return bool; 
                    }                
                }
                return bool; 
            }
        }
        
        let array = [54,54,34,56,76]
        every(array, function(element, index, collection) {
          return element > 55
        })
                
                
                
                
/**
 * some: This function calls a given <func> on every element of a collection. 
 * If the return value of calling <func> for even one element is true, return true. 
 * If all are false, this function returns false.
 * 
 * @param {collection}: This function can either take an array or object.
 * 
 * @param {func}: This function will take in a <func> that will be called w/
 * every element of the collection.
 * 
 * @return: If the return value of calling <func> for at least element is true, this 
 * function will return true, if all are false, it will return false.
 * 
 */    
 
    //Usage:
    
        function some(collection, func){ 
            var bool = false; 
            if(Array.isArray(collection)){ 
                if(func == null || func === undefined) { 
                    for(let i = 0; i < collection.length; i++){ 
                        if(collection[i] === true) { 
                            bool = true; 
                            return bool; 
                        }
                    }
                    return bool; 
                } else { 
                    for(let i = 0; i < collection.length; i++){ 
                        if(func(collection[i], i, collection) === true) { 
                            bool = true; 
                            return bool; 
                        }
                    }
                }
                return bool; 
            } else if(collection !== null || typeof collection === 'object'){ 
                for(var key in collection){ 
                    if(func(collection[key], key, collection) === true) { 
                        bool = true;
                        return bool; 
                    }                
                }
                return bool; 
            }
        }
        
        let arrayOfNums = [54,54,34,56,76]
        some(arrayOfNums, function(element, index, collection) {
          return element > 55
        });
        
        
        
/**
 * reduce: This function will call <func> on every element in the <array>, constantly
 * reassigning the 'current value' as the previous <func> call's result. 
 * 
 * @param {array}: This function will take in an array to iterate through.
 * 
 * @param {func}: This function will take in another function that will serve
 * as the 'action' function so be called on every element of <array>.
 * 
 * @param {seed}: If <seed> is provided, this function will use it as the
 * 'current value' at the first iteration.
 * 
 * @return: After <func> has been called on all elements of <array>, this function
 * will return the value assigned to the 'curent value'.
 * 
 */  
 
 
    //Usage:
    
        function reduce(array, func, seed) {
            
            var previousResult;
           
            if(seed === null || seed == undefined || seed === false) {
                
                previousResult = array[0];
                
                for(let i = 1; i < array.length; i++) {
                
                    previousResult = func(previousResult, array[i], i)
                }
            } else if(seed != null && seed != undefined) {
                
                previousResult = seed;
               
                for(let i = 0; i < array.length; i++) {
                    
                    previousResult = func(previousResult, array[i], i)
                }
            }
            return previousResult;
            
        }
        
        var numz = [1,2,3,4,5]
        reduce(numz, function sum(a, b) {
          return a + b
        }) //Will return the sum of all the elements of numz.



/**
 * extend: This function will take multiple objects and copy into the first
 * object, all the properties of the other objects.
 * 
 * @param {object} Multiple Objects: This function will take at least two objects
 * as paramaters with the possibility of 3 or more.
 * 
 * @return: This function will return an object containing all the properties
 * of all objects passed in as arguments.
 * 
 */
 
    //Usage:
        
        function extend(obj1, obj2, ...objects) { 
                var returnedTarget = Object.assign(obj1, obj2, ...objects);
               
                return returnedTarget
            }
            
            var obj11 = {name: 'Teamer Tibebu'}
            var obj21 = {name1: 'Senai Ayalew'}
            var obj31 = {name2: 'Henok Samuel'}
            extend(obj11, obj21, obj31); 
            //Will return { name: 'Teamer Tibebu', name1: 'Senai Ayalew', name2: 'Henok Samuel' }
        

        
module.exports.identity = identity;
module.exports.typeOf = typeOf;
module.exports.first = first;
module.exports.last = last;
module.exports.indexOf = indexOf;
module.exports.contains = contains;
module.exports.each = each;
module.exports.unique = unique;
module.exports.filter = filter;
module.exports.reject = reject;
module.exports.partition = partition;
module.exports.map = map;
module.exports.pluck = pluck;
module.exports.every = every;
module.exports.some = some;
module.exports.reduce = reduce;
module.exports.extend = extend;





