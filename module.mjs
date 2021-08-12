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

function square(num){
    return num ** 2
}

// function cube as internal_cube
function cube(num){
 
    return num **3
}
export {
    square,
     cube
    //   internal_cube as cube
}