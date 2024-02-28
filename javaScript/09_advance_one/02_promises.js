const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task completed");
        resolve();
    }, 1000);
});
promiseOne.then(function(){
    console.log("Promise completed");
});


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise 2 resolved");
});


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Sujal', email: 'mojkardi@gmail.com'});
    }, 1000);
});
promiseThree.then(function(user){
    console.log(user);
});


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "hitesh", password:"12345"});
        }else{
            reject('EROOR! something went wrong');
        }
    }, 1000);
});
promiseFour.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log('Finally resolved'));


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "javaScript", password:"1234"});
        }else{
            reject('EROOR! js went wrong');
        }
    }, 1000);
});
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}
consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error) {
//         console.log('Error: ', error);
//     }
// }
// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response;
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
});