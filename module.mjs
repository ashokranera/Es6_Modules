// --------------------------------------------------------------------------------------------
                            //  First way
// --------------------------------------------------------------------------------------------

// function square(num){
//     return num ** 2
// }

// // module.exports = { square }

// // 1 default export per module
// export default square 

// --------------------------------------------------------------------------------------------
                            //  2 way
// --------------------------------------------------------------------------------------------

// function square(num){
//     return num ** 2
// }

// // function cube as internal_cube
// function cube(num){
 
//     return num **3
// }
// export {
//     square,
//      cube
//     //   internal_cube as cube
// }

// --------------------------------------------------------------------------------------------
                            //  3 way import
// --------------------------------------------------------------------------------------------
// change the name of import

// function square(num){
//     return num ** 2
// }

// // function cube as internal_cube
// function internal_cube(num){
 
//     return num **3
// }
// export {
//     square,
//     internal_cube as cube
// }

// --------------------------------------------------------------------------------------------
                            //  4 way import
// --------------------------------------------------------------------------------------------

// function square(num){
//     return num ** 2
// }

// // function cube as internal_cube

// export function cube(num){
 
//     return num **3
// }


// --------------------------------------------------------------------------------------------
                            //  5 way import
// --------------------------------------------------------------------------------------------

// export function square(num){
//     return num ** 2
// }

// export function cube(num){
 
//     return num **3
// }

// export const num = 5

// /* 
 
//  {
//      squre : function
//      cube : function
//      num : number
//  }


// */


// --------------------------------------------------------------------------------------------
                            //  6 way import  include m2
// --------------------------------------------------------------------------------------------

//posible case 1

//case 2
// import { square } from "./module2.mjs"


// export function power(num){
 
//     return num **4
// }

// export {square}


//posible case 2

// --------------------------------------------------------------------------------------------

import { square } from "./module2.mjs"


export function power(num){
 
    return num **4
}

export {square} from './module2.mjs'

export * as m2 from './module2.mjs'