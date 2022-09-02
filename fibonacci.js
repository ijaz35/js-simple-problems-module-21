function fiboSeries(lengthOfSeries) {
    if (typeof lengthOfSeries != 'number') {
        return 'Please enter a number';
    }
    if (lengthOfSeries < 0) {
        return 'please enter a positive number';
    }
    var seriesFibo = [0, 1];
    for (let i = 2; i < lengthOfSeries; i++) {
        seriesFibo[i] = seriesFibo[i - 1] + seriesFibo[i - 2];

    }
    return seriesFibo;
}
console.log(fiboSeries('7'));