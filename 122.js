/**
 * 122. Best Time to Buy and Sell Stock II
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
    On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
    Find and return the maximum profit you can achieve.
 * @param {*} prices 
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let buyPrice = -1;
    for (let i = 0; i < prices.length; i++) {
        // 未买的时候，一直下跌不买
        if (buyPrice === -1 && prices[i] >= prices[i + 1] && i !== prices.length - 1) {
            continue;
        }
        // 上涨出现买点
        if (buyPrice === -1) {
            buyPrice = prices[i];
        }

        // 下跌出现卖点
        if (buyPrice !== -1 && prices[i] > prices[i + 1]) {
            maxProfit += prices[i] - buyPrice;
            buyPrice = -1;
        }

        // 如果一直未下跌
        if (buyPrice !== -1 && i === prices.length - 1) {
            maxProfit += prices[i] - buyPrice;
        }

    }
    return maxProfit;
};

console.log(maxProfit([1, 2, 3, 4, 5]));