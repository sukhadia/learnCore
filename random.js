//REAL ANSWER, MEETING EXERCISE REQUIREMENTS. Note: Doesn't care that it's a sorted array of numbers.

function randomize(arr) {
    if (!arr || arr.length == 0) return;

    var randomIndexes = [];

    for (var i=0; i<arr.length; i++) {
        var generatedIndex = randomIntLessThan(arr.length-1);
        while (randomIndexes.includes(generatedIndex)) {
            generatedIndex = randomIntLessThan(arr.length);
        }
        randomIndexes.push(generatedIndex);
    }

    return randomIndexes.map(function(i) {
        return arr[i];
    })
}

function randomIntLessThan(num) {
    return Math.floor(Math.random() * Math.floor(num));
}