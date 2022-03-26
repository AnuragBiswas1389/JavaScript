`use strict`


// the function of the spread operator is to expad an array/ litearal

const desktop={
    ram: '4gb',
    processor: 'i3',
    memory: '500gb',

    performance:{
        gpu:'intel',
        gaming:'not for gaming'
    }
}


//printing out the orginal 

console.log(desktop);


//creating a new object using the spread operator..
const laptop={
    ...desktop,
    manufacture: 'dell',
    display: 'lcd',
}

//displaying the object
console.log(laptop);

//creating an array...
const array=['1','2','3'];

//printing out the orginal array..
console.log(`the initial arry is ${array}`);

// now extending the array into a new array using the spread operator..
const newArray=[...array, '4', '5', '6']

//now printing out the modified array...
console.log(` the modified array is ${newArray}`);

//creating a copy using the spread operator...
const copyArray=[
    ...newArray,
]

//printing the copy array...
console.log(copyArray)

//modifying the copy array...
copyArray.push('new value')

//printing out the...
console.log(` modified version of the copyArray is [${copyArray}] where as the orginal version is[${newArray}] `)