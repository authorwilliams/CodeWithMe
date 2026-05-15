/**
 * __________________________________________
 * ================== Day 1 =================
 * 
 * 
 * done: Function
 * todo: Loops
 * todo: Strings
 * todo: Numbers
 * todo: Objects
 * 
 * _________________________________________
 * ===============CodeWithMe================
*/


// Functions //


// function myFunction() {
//     let username = 'Williams'
    
//     function mySecFunction() {
//         let username = 'Mayor';
//         console.log(username);
//     }
    
//     mySecFunction()
    
//     // console.log(username);

    
// }

// myFunction()






function divideNumbers(numerator, denominator) {
    let result = numerator / denominator

    return result
}


let result = divideNumbers(10, 2)

 result = divideNumbers(5, 2)

// console.log(result)




const person = {
    firstName: 'Author',
    lastName: 'Williams',
    bloodType: 'AA',
    age: 17,
    nationality: 'Nigeria',
    favoriteColors: ['Black', 'White', 'Yellow'],

    fullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}





// console.log(person.fullName())



// function addNumbers(num1, num2) {

//     let result = num1 + num2

//     return result
// }


// let myCalResult = addNumbers(5, 10)

// console.log(myCalResult);




const names = ['Williams', 'Maxwell', 'Mayor', 'Joker']


let length = names.length

let index = 0



while (index < length) {
    
    console.log(index)
    
    index++
    // if(index === 2) continue
}