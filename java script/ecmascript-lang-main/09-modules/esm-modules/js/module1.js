console.log("Module1", myGlobal, myGlobal2);
/* export */ let x = 10;

/* export */ function myModule1Fn(){
    console.log("I am from Module1");
}

/* export */ class Customer{

}

/* Best Practice */
export {x as y, myModule1Fn};
export {Customer};
