// function printFullName (){
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
// }
// console.log(printFullName())



// const changeToUpperCase = arr => {
//     const newArr = []
//     for (const element of arr) {
//       newArr.push(element.toUpperCase())
//     }
//     return newArr
//   }

//   const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
//   console.log(changeToUpperCase(countries))


// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName:function () {
//         return `${this.skills}`
//     }
//     // getFullName: function() {
//     //   return `${this.firstName} ${this.lastName}`
//     // }
//   }

//   console.log(person.getFullName())
//   // Asabeneh Yetayeh



const numbers = [1, 2, 3, 4]

const sumArray = arr => {
    let sum = 0
    const callBack = function (element) {
        console.log(element);
        sum += element
    }
    numbers.forEach(callBack)
    return sum

}
console.log(sumArray(numbers))