function reverse(arr) {
    var copy = [];
    result = arr;
    for (var i = 0; i < arr.length; i++) {
        copy[i] = arr[i];
    }
    var counter = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[counter] = copy[i];
        counter++;
    }
    return arr;
}