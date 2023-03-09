/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 创建 dp 数组
  const dp = new Array(n + 1).fill(0);

  // 初始化 dp 数组
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};

numTrees(4);
