/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  // 创建 dp 数组
  const dp = new Array(amount + 1).fill(0);

  // 后续所有计算都是基于当前的 dp[0]，组合问题这里的赋值尤为重要
  dp[0] = 1;

  // 此处注意，组合问题：先遍历物品，再遍历背包
  // 排列问题：先遍历背包，再遍历物品
  // 遍历物品
  for (let i = 0; i < coins.length; i++) {
    // 遍历背包容量
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  console.log(dp);
  return dp[amount];
};

change(5, [1, 2, 5]);
