function testWeightBagProblem(weight, value, size) {
  const len = weight.length;
  const dp = new Array(size + 1).fill(0);

  // 遍历物品
  for (let i = 1; i <= len; i++) {
    // 遍历背包
    for (let j = size; j >= weight[i - 1]; j--) {
      // 比较得出最大值
      dp[j] = Math.max(dp[j], dp[j - weight[i - 1]] + value[i - 1]);
    }
  }

  console.table(dp);

  return dp[size];
}

function test() {
  console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();
