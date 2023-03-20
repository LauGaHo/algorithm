/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 创建 dp 数组
  const dp = new Array(amount + 1).fill(Infinity);

  // 初始化 dp 数组
  dp[0] = 0;

  // 先遍历物品
  for (let i = 0; i < coins.length; i++) {
    // 再遍历背包
    for (let j = coins[i]; j <= amount; j++) {
      // 因为是求最小组合数，所以递推公式如下所示
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  // 数组最后一位为 Infinity，说明没有路径，直接返回 -1，反之返回正常值l
  return dp[amount] === Infinity ? -1 : dp[amount];
};

coinChange([1, 2, 5], 11);
coinChange([2], 3);
coinChange([1], 0);
