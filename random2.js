//WENT OFF WRONG TRACK ON THIS ONE. But keeping it just in case you find it interesting.
// At first wasn't sure what uniformly randomized meant, so recognized a pattern
//in the sample output provided and created the following algorithm to outputt that exact pattern for any input.
//But I believe, the other script has the solution you were looking for.

function randomizeByPattern(arr) {
    if (arr.length === 1)
        return arr;

    //algorithm: first item, make it the 'centre' of the array.
    // then in turns put the rest of the items to the right of the 'center' and to the left, until you run out.

    var output = [];
    output.push(arr[0])
    var left = false;
    var centerIndex = 0;

    for (var i=1; i<arr.length; i++) {

        if (output.length == 1) {
            if (left) {
                output.unshift(arr[i]);
                centerIndex++
            }
            else {
                output.push(arr[i]);
            }
        }
        else {
            if (left) {
                output.splice(centerIndex, 0, arr[i]);
                centerIndex++
            }
            else {
                output.splice(centerIndex+1, 0, arr[i]);
            }

        }
        left=!left;
    }

    return output;

}