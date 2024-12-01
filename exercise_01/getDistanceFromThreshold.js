/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * 
 * @param {number} exceedsnumber - This number is major exceeds
 * @param {number} leftsnumbers - This number is major lefts
 * @returns number  - 
 */
function getDistanceFromThreshold(exceedsnumber, leftsnumbers){
    const resultdigitcompare = exceedsnumber - leftsnumbers;

    return resultdigitcompare;
} 

export default getDistanceFromThreshold;
