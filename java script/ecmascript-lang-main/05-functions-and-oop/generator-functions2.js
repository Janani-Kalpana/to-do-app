// const myObj = {
//     [Symbol.iterator]: function () {
//         const nums = [10, 20, 30, 40, 50];
//         let i = 0;
//         return {
//             next: function() {
//                 const result = {
//                     value: nums[i],
//                     done: i === nums.length
//                 }
//                 i++;
//                 return result;
//             }
//         }
//     }
// };

const myObj = {
    [Symbol.iterator]: function* () {
        const nums = [10, 20, 30, 40, 50];
        for (let i = 0; i < nums.length; i++) {
            yield nums[i];
        }
    }
};


for (const value of myObj) {
    console.log(value);
}
