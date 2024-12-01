/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */
/**
 * 
 * @param {number} limit - input determin the limit
 * @returns number - 
 */

function generateRandomNumberInRange(limit){
    const randomnumber = Math.floor(Math.random() * (limit + 1));

    return randomnumber;
}

export default generateRandomNumberInRange;
