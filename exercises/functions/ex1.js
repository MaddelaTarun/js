// Write a function sumAllPrices(...prices) that uses the Rest Operator. It should take any number of arguments and return their total sum.

function sumAllPrices(...prices) {
    let result = 0;
    for(i = 0; i<prices.length; i++) {
	result = result + prices[i]; 
    }
    return result;
}

console.log(sumAllPrices(100,200,300,400));
