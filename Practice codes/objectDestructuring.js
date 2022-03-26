`use strinct`



laptop={
    ram:"4gb",
    processor:"i3",
    memory:"256gb",

    performance:{
        gaming:"good in gaming",
        graphics:"graphics is very good",
        wireless:{
            wifi:  "no wifi",
            lan: "no lan",
            bluetooth:"bluetooth available"
        },
        effec:"not efficient",
        display:"display not good",

    },

    getinfo: function(info){
        if(!this[info]==undefined){
           return this[info]; 
        }else{
            return this.performance[info];
        }
        

    }
}

value={
    a:10,
    b:20,
    c:50,
    d:{
        g:33,
        h:50,
        y:60,
        k:{
            j:70,
             h:{
                k:333,
             }
        }
    },
    gethello:function(){
        console.log("hello world");
    }

}


console.log(laptop.getinfo('graphics'));

const {
     ram: laptop_ram="null",
     performance: performance_laptop='null'
    }=laptop;


console.log(laptop_ram, performance_laptop);


const{
    a:first=0,
    d:second='null',
    h:third="null",
    x:none="null",
    gethello:hello="h"

}=value;
 
console.log(first, second, third, none, hello);
hello();