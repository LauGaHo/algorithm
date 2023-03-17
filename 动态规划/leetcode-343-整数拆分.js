/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // 创建 dp 数组
  const dp = new Array(n + 1).fill(0);
  // 初始化 dp 数组
  dp[2] = 1;

  // 循环遍历为 dp 数组赋值
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      // (i - j) * j 可以理解为将 i 拆分为两个整数
      // dp[i - j] * j 可以理解为将 i 拆分为一个 j 和将 i - j 拆分为两个或以上的整数，总共拆分为 3 个或 3 个以上
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }

  return dp[n];
};
