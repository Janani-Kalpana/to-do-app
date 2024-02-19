async function getValue(x){
    return x;
}

async function numbers(){
    const numbers = [getValue(10), getValue(20), getValue(30)
                ,getValue(40), getValue(50)];
    return numbers;
}

// for(const promise of numbers){
//     promise.then(val => console.log(val));
// }

// numbers.forEach(p => p.then(console.log));

(async ()=> {

    // for (const promise of numbers){
    //     const value = await promise;
    //     console.log(value);
    // }

    for await (const value  of await numbers()){
        console.log(value);
    }    

})();