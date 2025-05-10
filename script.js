function mincost(arr) {
    let totalCost = 0;

    while (arr.length > 1) {
        arr.sort((a, b) => a - b); // Sort ascending

        // Take the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let cost = first + second;
        totalCost += cost;

        // Add the combined rope back
        arr.push(cost);
    }

    return totalCost;
}
module.exports=mincost;
