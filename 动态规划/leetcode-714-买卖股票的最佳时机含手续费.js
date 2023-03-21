/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // dp 数组的含义：
  // dp[0]: 持有股票时最大现金和
  // dp[1]: 不持有股票时最大现金和
  let dp = [-prices[0], 0];

  for (let i = 1; i < prices.length; i++) {
    // i 天不持有股票的最大现金和
    dp[1] = Math.max(dp[1], dp[0] + prices[i] - fee);

    // i 天持有股票的最大现金和
    dp[0] = Math.max(dp[0], dp[1] - prices[i]);
  }

  return dp[1];
};

maxProfit([1, 3, 2, 8, 4, 9], 2);
