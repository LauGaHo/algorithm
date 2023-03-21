/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  // 创建 dp 数组
  const dp = new Array(2 * k + 1).fill(0);

  // 初始化 dp 数组
  // dp[k]: 其中 k 为奇数，说明标识着买入股票
  // dp[k]: 其中 k 为偶数，说明标识着卖出股票
  for (let i = 1; i <= k; i++) {
    dp[2 * i - 1] = -prices[0];
  }

  // 循环遍历
  for (let j = 1; j < prices.length; j++) {
    for (let k = dp.length - 1; k > 0; k--) {
      // k 为奇数
      if (k & 1) {
        dp[k] = Math.max(dp[k], dp[k - 1] - prices[j]);
      }
      // k 为偶数
      else {
        dp[k] = Math.max(dp[k], dp[k - 1] + prices[j]);
      }
    }
  }

  return dp[2 * k];
};

maxProfit(2, [3, 2, 6, 5, 0, 3]);
