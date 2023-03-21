/**
 * 二维数组方法
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

// 二维数组方法
maxProfit_1([3, 3, 5, 0, 0, 3, 1, 4]);

/**
 * 滚动数组方法
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_2 = function (prices) {
  // 创建 dp 数组，dp 数组的含义如下所示：
  // dp[0]: 不操作
  // dp[1]: 第一次持有
  // dp[2]: 第一次不持有
  // dp[3]: 第二次持有
  // dp[4]: 第二次不持有
  const dp = [0, -prices[0], 0, -prices[0], 0];

  // 循环
  for (let i = 1; i < prices.length; i++) {
    // 第二次不持有最大现金和
    dp[4] = Math.max(
      dp[4], // 前一天第二次不持有
      dp[3] + prices[i] // 前一天第二次持有，今天卖出
    );
    // 第二次持有最大现金和
    dp[3] = Math.max(
      dp[3], // 前一天第二次持有
      dp[2] - prices[i] // 前一天第一次不持有，今天买入
    );
    // 第一次不持有最大现金和
    dp[2] = Math.max(
      dp[2], // 前一天第一次不持有
      dp[1] + prices[i] // 前一天第一次持有，今天卖出
    );
    // 第一次持有最大现金和
    dp[1] = Math.max(
      dp[1], // 前一天第一次持有
      dp[0] - prices[i] // 前一天不操作，今天买入
    );
  }

  return dp[4];
};

// 滚动数组方法
maxProfit_2([3, 3, 5, 0, 0, 3, 1, 4]);
