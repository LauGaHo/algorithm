/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_1 = function (prices) {
  // 创建 dp 数组，dp 数组的含义如下所示：
  // dp[i][0]: 第 i 天不操作
  // dp[i][1]: 第 i 天第一次持有
  // dp[i][2]: 第 i 天第一次不持有
  // dp[i][3]: 第 i 天第二次持有
  // dp[i][4]: 第 i 天第二次不持有
  const dp = new Array(prices.length).fill(0).map((_) => new Array(5).fill(0));

  // 初始化 dp 数组
  dp[0] = [0, -prices[0], 0, -prices[0], 0];

  // 循环
  for (let i = 1; i < prices.length; i++) {
    // dp[i][0]: 第 i 天不操作
    dp[i][0] = dp[i - 1][0];

    // dp[i][1]: 第 i 天第一次持有
    dp[i][1] = Math.max(
      dp[i - 1][0] - prices[i], // i - 1 天不操作，i 天买入股票
      dp[i - 1][1] // i - 1 第一次持有
    );

    // dp[i][2]: 第 i 天第一次不持有
    dp[i][2] = Math.max(
      dp[i - 1][2], // i - 1 天第一次不持有股票
      dp[i - 1][1] + prices[i] // i - 1 天第一次持有，i 天卖出股票
    );

    // dp[i][3]: 第 i 天第二次持有
    dp[i][3] = Math.max(
      dp[i - 1][3], // i - 1 天第二次持有股票
      dp[i - 1][2] - prices[i] // i - 1 天第一次不持有股票，i 天买入股票
    );

    // dp[i][4]: 第 i 天第二次不持有股票
    dp[i][4] = Math.max(
      dp[i - 1][4], // i - 1 天第二次不持有股票
      dp[i - 1][3] + prices[i] // i - 1 天第二次持有股票，i 天卖出股票
    );
  }

  return dp[prices.length - 1][4];
};

maxProfit_1([3, 3, 5, 0, 0, 3, 1, 4]);
