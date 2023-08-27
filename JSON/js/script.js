
// address: {
        //     city: "Erevan",
        //     toJSON: ()=> "Erevan Adonci 7"
        // }



// console.log(obj);
// let b = JSON.stringify(obj,null,2)
// console.log(b);
// let person = JSON.stringify(obj,function(key,value){
    //     if(typeof value == "number"){
        //         return value + 2
        //     } else if( key == "name"){
            //         return value = "Lianna"
            //     }
            //     return value
            // },2)
            // console.log(person);
            
            // let pars = JSON.parse(person)
            // console.log(pars);
            // pars.age = "18"
            // console.log(pars);
            // pars.name = "Lianna"
            // console.log(pars);
            
            // local storage
            
// Session storage - browsery pakeluc kam tarmacneluc heto jnjvum e

// Cookies

// console.log(localStorage.getItem("reg"));
// let h = localStorage.getItem("reg")
// let g = JSON.parse(h)
// console.log(g);
// localStorage.setItem("reg",JSON.stringify(obj))
// console.log(localStorage.getItem("reg"));
// localStorage.removeItem("reg")
// localStorage.clear()

// // sessionStorage.setItem("register",JSON.stringify(obj))
// // let a = sessionStorage.getItem("register")
// // let b = JSON.parse(a)
// // sessionStorage.removeItem("register")
// // sessionStorage.clear()

// window.addEventListener("storage",function(event){
    //     console.log(event);
    // })
    
    
    let obj = {
        name: "Narek",
        age: 18,
        job: "developer",
    }
    
    
    localStorage.setItem("reg",JSON.stringify(obj))
    let a = localStorage.getItem("reg")
    let b = JSON.parse(a)
    console.log(b);
















