/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * 
 * @param {number} exceedsnumber - DESCRIPTION
 * @param {number} leftsnumbers - DESCRIPTION
 * @returns number  - DESCRIPTION
 */
function getDistanceFromThreshold(exceedsnumber, leftsnumbers){
    const resultdigitcompare = exceedsnumber - leftsnumbers;

    return resultdigitcompare;
} 

export default getDistanceFromThreshold;
