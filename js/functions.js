function add(...args) {
    let sum = 0;
    for (val of args) {
	sum += val;
    }
    return sum;
}

module.exports = add;
