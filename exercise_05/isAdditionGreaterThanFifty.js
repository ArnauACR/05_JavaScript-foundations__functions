/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */
/**
 * 
 * @param {number} numbersum1 - the first input 
 * @param {number} numbersum2 - the second input
 * @returns boolean - 
 */

function isAdditionGreaterThanFifty(numbersum1, numbersum2){
    const  resultsum1 = (numbersum1 + numbersum2);
    const resultsum2 =  resultsum1 >= 50;

    return resultsum2;
}

export default isAdditionGreaterThanFifty;
