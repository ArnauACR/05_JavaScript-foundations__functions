/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2
 * input: "This is short one."
 * output: "this is short one."
 */

/**
 * 
 * @param {string} sentence - its the string to tranform
 * @returns string - 
 */


function formatStringByWordsLength(sentence) {
    const words = sentence.split(' ');
    switch (words.length > 5) {
        case true:
            return sentence.toUpperCase();
        case false:
            return sentence.toLowerCase();
    }
}

export default formatStringByWordsLength;
