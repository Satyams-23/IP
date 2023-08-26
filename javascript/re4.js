
let lottery = new Promise(function(resolve, reject){
    console.log("Lottery is happening");

    setTimeout(() => {
        if(Math.random() >= 0.5){
            resolve("You Won!!!")
        }
        else{
            reject(new Error("Better luck next time"))
        }
    }, 5000);

})

console.log(lottery);