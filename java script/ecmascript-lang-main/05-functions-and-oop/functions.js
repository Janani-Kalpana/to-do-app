myOuterFn();

function myOuterFn(){

    myInnerFn2();
    myInnerFn();

    function myInnerFn(){
        console.log("My Inner Function")

        function myInnerInnerFn(){
            console.log("My Inner Inner Function");
        }

        myInnerFn2();
        myInnerInnerFn();
    }

    function myInnerFn2(){
        console.log("My Inner Function 2");
    }
}


