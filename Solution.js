
/**
 * @param {string} input
 * @param {number} sizeOfGroupToReverse
 * @return {string}
 */
var reverseStr = function (input, sizeOfGroupToReverse) {

    const array = input.split('');
    let startReverse = 0;
    let sizeInput = input.length;

    while (startReverse < sizeInput) {
        reverseRange(startReverse, Math.min(sizeInput - 1, startReverse + sizeOfGroupToReverse - 1), array);
        startReverse += 2 * sizeOfGroupToReverse;
    }
    return array.join('');
};

/**
 * @param {number} start
 * @param {number} end
 * @param {string[]} array
 */
function reverseRange(start, end, array) {
    while (start < end) {
        swapTwoElements(start++, end--, array);
    }
}

/**
 * @param {number} start
 * @param {number} end
 * @param {string[]} array
 */
function swapTwoElements(start, end, array) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
}
