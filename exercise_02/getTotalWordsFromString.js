/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */
/**
 * 
 * @param {string} userstring - the string whta user introduce
 * @returns number -
 */


function getTotalWordsFromString(userstring){
    const resultnumberwords = userstring.split(" ");

    return resultnumberwords;
}

export default getTotalWordsFromString;
