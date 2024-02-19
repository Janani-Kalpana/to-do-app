const myPromise = new Promise(executor);

function executor(res, rej) {
    setTimeout(() => {
        rej();
    }, 2000);
}

myPromise.then(value => {
    console.log("Promise Resolved with value: " + value);
}).catch(err => {
    console.log("Promise Rejected");
});

async function myFun2() {
    try {
        let value = await myPromise;
        console.log("Hey this is the value", value);
    } catch (err) {
        console.log("Promise Rejected");
    }
}
myFun2();

// async function myFun(x,y){
//     if (x < 5) throw new Error('10');
//     return x + y;
// }

// let result = myFun(-5 , 20);
// result.catch(err => console.log("Something went wrong"));
// result.then(val => console.log(val));

async function getNumbers() {
    return [10, 20, 30, 40, 50];
}

getNumbers().then(arr => arr.forEach(num => 
                        console.log(num)));
getNumbers().then(arr => {
    for(const val of arr) console.log(val);
});

(async ()=>{
    //const numbers = await getNumbers();
    for (const num of await getNumbers()){
        console.log(num);
    }
})();

(async ()=> {

})();