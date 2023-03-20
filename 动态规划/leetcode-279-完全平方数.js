/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 获取物品数组长度
  const arrLength = Math.floor(Math.sqrt(n));
  // 获取物品数组
  const goods = new Array(arrLength + 1)
    .fill(0)
    .map((val, index) => Math.pow(index, 2));

  // 创建 dp 数组
  const dp = new Array(n + 1).fill(Infinity);

  // 初始化 dp 数组
  dp[0] = 0;

  // 先遍历物品
  for (let i = 1; i <= arrLength; i++) {
    // 再遍历背包容量
    for (let j = goods[i]; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - goods[i]] + 1);
    }
  }

  return dp[n];
};

numSquares(12);
