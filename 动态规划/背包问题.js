function weightBagProblem(weight, value, size) {
  // 定义 dp 数组
  const len = weight.length;
  const dp = new Array(len).fill().map(() => new Array(size + 1).fill(0));

  // 初始化 dp 数组
  for (let j = weight[0]; j < size; j++) {
    dp[0][j] = value[0];
  }

  // 循环求值
  // 循环物品质量
  for (let i = 1; i < weight.length; i++) {
    // 循环背包重量
    for (let j = 1; j <= size; j++) {
      // 当前的背包重量 < 最新物品的质量
      if (j < weight[i]) {
        // 值为该背包质量下，不含有最新物品的背包价值最大
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }

  console.table(dp);

  return dp[len - 1][size];
}

function test() {
  console.log(weightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();
