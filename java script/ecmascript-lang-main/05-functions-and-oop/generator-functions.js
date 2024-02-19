// Example 1
//=================================

// for(const c of myFn()){
//     console.log(c.id, c.name);
//     /* 
//         1 Kasun
//         2 Nuwan
//         3 Ruwan
//         4 Supun
//     */
// }

// function* myFn(){
//     yield {id: 1, name: 'Kasun'};
//     yield {id: 2, name: 'Nuwan'};
//     yield {id: 3, name: 'Ruwan'};
//     yield {id: 4, name: 'Supun'};
// }

// Example 2
//=================================

// const fn = myFn();
// for(const value of fn()){
//     console.log(value);
//     /* 
//         Kasun
//         Nuwan
//         Ruwan
//         Supun
//     */
// }

// function myFn(){
//     return function* (){
//         yield 'Kasun';
//         yield 'Nuwan';
//         yield 'Ruwan';
//         yield 'Supun';
//     }
// }

// Example 3
//=================================

// for(const value of nums(5)){
//     console.log(value); 
//     /* 
//         1
//         2
//         3
//         4
//         5
//     */
// }

// for(const value of nums(3)){
//     console.log(value); 
//     /* 
//         1
//         2
//         3
//     */
// }

// for(const value of nums(2)){
//     console.log(value); 
//     /* 
//         1
//         2
//     */
// }

// function* nums(count){
//     for(let i = 1; i <= count; i++) {
//         yield i;
//     }
// }

// Example 4
//=================================

// for (const c of customers()) {
//     for (const t of c.contacts()) {
//         console.log(c.id, c.name, t);
//         /* 
//             C001 Kasun 011-1234567
//             C001 Kasun 022-1234567
//             -------------
//             C002 Nuwan 033-1234567        
//             -------------
//             C003 Ruwan 044-1234567        
//             C003 Ruwan 055-1234567        
//             C003 Ruwan 066-1234567
//             -------------        
//         */
//     }
//     console.log("-------------");
// }

// function* customers() {
//     yield {
//         id: 'C001',
//         name: 'Kasun',
//         contacts: function* (){
//             yield '011-1234567';
//             yield '022-1234567';
//         }
//     };
//     yield {
//         id: 'C002',
//         name: 'Nuwan',
//         *contacts(){
//             yield '033-1234567';
//         }
//     }; 
//     yield {
//         id: 'C003',
//         name: 'Ruwan',
//         contacts: function* (){
//             yield '044-1234567';
//             yield '055-1234567';
//             yield '066-1234567';
//         }
//     };       
// }

// Example 5
//=================================

// process.stdout.write('Hello \n');
// console.log('World!')

// for(const row of stars(6)){
//     for (const value of stars(5)){
//         process.stdout.write(value);
//     }
//     console.log();
// }

// /*

//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *

// */

// function* stars(count){
//     for(let i = 0; i < count; i++) yield '* ';
// }

// Example 6
//=================================

// for(const value of customers()){
//     process.stdout.write(value);
//     /* 
//         C001 Kasun
//         C002 Nuwan
//         C003 Ruwan
//     */
// }

// function* customers(){
//     const ids = ['C001', 'C002', 'C003'];
//     for(let i = 0; i< ids.length ;i++){ 
//         yield ids[i];
//         yield* name(i);
//     }
// }

// function* name(index){
//     yield " " + ['Kasun','Nuwan','Ruwan'][index] + "\n";
// }

// Example 7
//=================================

// const fn = myFn(3);

// let result;
// while (!(result = fn.next()).done) {
//     const fn2 = myFn(result.value);
//     for (const value of fn2) {
//         console.log(value);
//     }
// }

// {value: 0, done: false}
// {value: 1, done: false} -> 0
// {value: 2, done: false} -> 0 1
// {value: undefined, done: true}

// function* myFn(num) {
//     for (let i = 0; i < num; i++) yield i;
// }

// Example 8
//=================================

const customerList = [
    {
        id: 'C001',
        name: 'Kasun',
        contact: ['011-1234567', '022-1234567']
    },
    {
        id: 'C002',
        name: 'Nuwan',
        contact: ['033-1234567']
    },
    {
        id: 'C003',
        name: 'Ruwan',
        contact: ['044-1234567', '055-1234567', '066-1234567']
    }        
];

for (const c of customers()) {
    console.log(c.id, c.name, c.contact);
    /* 
        C001 Kasun 011-1234567
        C001 Kasun 022-1234567
        C002 Nuwan 033-1234567
        C003 Ruwan 044-1234567
        C003 Ruwan 055-1234567
        C003 Ruwan 066-1234567
    */
}

for (const c of customerList) {
    for (const value of contacts(c.id)) {
        console.log(value);
        /* 
            011-1234567
            022-1234567
            033-1234567
            044-1234567
            055-1234567
            066-1234567
        */
    }
    console.log("----------");
}

function* customers() {
    for(const customer of customerList){
        for(const contact of contacts(customer.id)){
            yield {id: customer.id, name: customer.name, contact: contact};
        }
    }
}

function* contacts(id) {
    for(const contact of 
        customerList.find(c => c.id === id).contact)
        yield contact;
}
