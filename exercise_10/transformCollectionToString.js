/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */
/**
 * 
 * @param {Array} collection - transformer array
 * @returns {string} - trasnformer string
 */

function transformCollectionToString(collection) {
    switch (collection.length) {
        case 0:
            return '';
        default:
            return collection.join(' | ');
    }
}

export default transformCollectionToString;
