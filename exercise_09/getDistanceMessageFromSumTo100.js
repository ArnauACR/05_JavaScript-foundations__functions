/**
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
 * - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
 * - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value)
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 is left in 30 from number 100"
 */

/**
 * 
 * @param {number} value -is the number what sum with random number
 * @returns -
 */

function getDistanceMessageFromSumTo100(value) {
    const randomNumber = Math.floor(Math.random() * 101);
    const sum = value + randomNumber;
    let message;

    switch (sum > 100) {
        case true:
            message = 'Sum with value ${sum} exceeds in ${sum - 100} from number 100';

            return message;

        case false:
            message = 'Sum with value ${sum} is left in ${100 - sum} from number 100';

            return message;
    }

}

export default getDistanceMessageFromSumTo100;

