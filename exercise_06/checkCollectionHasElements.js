/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */
/**
 * 
 * @param {} collection - array 
 * @returns 
 */

/** function checkCollectionHasElements(collection){
    if(collection === null){
        
        return "is empty";
    }

    if(!Array.isArray(collection)){

        return "no is empty";
    }

    if(collection.length > 0){
        
        return "is empty";
    }

    return "no is empty";

} **/

export default checkCollectionHasElements;
