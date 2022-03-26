// creating an object...
'use scrict';

let laptop ={
    ram:4,
    cpu:`i5`,
    memory:350,
    brand:`dell`,
    getInfo: function(info){
        console.log(`the required info of is ${this[info]}`);
    },

    get: function(info){
        return this[info];
    }
}

// this is also an example of object
let desktop = {
    ram: 8,
    cpu: `i7`,
    memory: 500, 
    //this is a function inside an object so it is called a method...
    getInfo: function(info){
        
    },

    get: function(info){
        return `${this[info]}`;
    },

    performance : {
        gaming: `excellent`,
        workig:  `excellent`,
        videoEditing: `excellent`,
        graphics: `very good`,

            getPerformanceInfo : function(info){
                return(this[info]);
            }
    }
    
}


//creating a function 
function getInfo(info) {
    
    console.log(` the ${info} of the laptop is ${laptop.get(info)} and the info of the desktop is ${desktop.get(info)}`);
    

const listInfo = function(object){
  
    for(let prop in object){
        console.log(prop);
    }
}

const delProp = function(obj,name){
    console.log(`you have requested to delete the ${name} property of the ${obj} object`)
    delete obj[name];
}



//calling the method from the object...
//laptop.getInfo(`cpu`);
//desktop.getInfo(`memory`);

//calling the function...
delProp(desktop,`ram`);
getInfo(`ram`);

console.log(desktop.performance.getPerformanceInfo(`graphics`));

listInfo(desktop);

}