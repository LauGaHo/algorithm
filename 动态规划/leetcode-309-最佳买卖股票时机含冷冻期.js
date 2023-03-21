/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 创建 dp 数组并初始化 dp 数组
  // dp 数组含义：
  // dp[0]: 买入股票
  // dp[1]: 保持卖出股票
  // dp[2]: 今天卖出股票
  // dp[3]: 冷冻期
  const dp = new Array(prices.length).fill(0).map((_) => new Array(4).fill(0));

  // 初始化 dp 数组
  dp[0] = [-prices[0], 0, 0, 0];

  for (let i = 1; i < prices.length; i++) {
    // 持有股票
    dp[i][0] = Math.max(
      dp[i - 1][0],
      dp[i - 1][3] - prices[i],
      dp[i - 1][1] - prices[i]
    );

    // 保持卖出股票
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]);

    // 今天卖出股票
    dp[i][2] = dp[i - 1][0] + prices[i];

    // 冷冻期
    dp[i][3] = dp[i - 1][2];
  }

  return Math.max(...dp[prices.length - 1]);
};

maxProfit([1, 2, 3, 0, 2]);
