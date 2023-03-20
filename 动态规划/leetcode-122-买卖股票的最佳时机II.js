/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 创建 dp 数组
  // dp 数组含义如下：
  // dp[i][0]: 第 i 天持有股票的最大现金和
  // dp[i][1]: 第 i 天不持有股票的最大现金和
  const dp = new Array(prices.length).fill([0, 0]);

  // 初始化 dp 数组
  dp[0] = [-prices[0], 0];

  // 循环
  for (let i = 1; i < prices.length; i++) {
    // 第 i 天持有股票的最大现金和
    dp[i][0] = Math.max(
      // 前一天持有股票的最大现金和
      dp[i - 1][0],
      // 今天买入股票
      dp[i - 1][1] - prices[i]
    );
    // 第 i 天不持有股票的最大现金和
    dp[i][1] = Math.max(
      // 前一天不持有股票的最大现金和
      dp[i - 1][1],
      // 今天卖出股票
      dp[i - 1][0] + prices[i]
    );
  }

  return dp[prices.length - 1][1];
};

maxProfit([7, 1, 5, 3, 6, 4]);
