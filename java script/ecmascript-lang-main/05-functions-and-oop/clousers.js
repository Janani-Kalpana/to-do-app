function outerFn(){
    let x = 10;

    return function innerFn(y){
        console.log(x + y);
    }
}

// const resultFn = outerFn();
// resultFn(20);
outerFn()(20);
