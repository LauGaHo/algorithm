/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 创建 dp 二维数组
  // dp[i][0]: 表示第 i 天持有股票的最大现金和
  // dp[i][1]: 表示第 i 天不持有股票的最大现金和
  const dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));

  // 初始化 dp 数组
  dp[0][0] = -prices[0];
  dp[0][1] = 0;

  for (let i = 1; i < prices.length; i++) {
    // 第 i 天持有股票的最大现金和由两个维度推算
    // 1. 前一天已经持有了股票
    // 2. 当天买入股票
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);

    // 第 i 天不持有股票的最大现金和同样由两个维度推算得出
    // 1. 前一天或前一天之前就已经卖出股票持有现金
    // 2. 当天卖出股票
    dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]);
  }

  return dp[prices.length - 1][1];
};

maxProfit([7, 1, 5, 3, 6, 4]);
