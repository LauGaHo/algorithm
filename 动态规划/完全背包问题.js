// 先遍历物品，再遍历背包容量
function completeBag_1(weight, value, bagSize) {
  const dp = new Array(bagSize + 1).fill(0);

  // 先遍历物品
  for (let i = 0; i < weight.length; i++) {
    // 再遍历背包容量
    for (let j = weight[i]; j <= bagSize; j++) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }

  console.log(dp);
}

// 先遍历背包容量，再遍历物品
function completeBag_2(weight, value, bagSize) {
  const dp = new Array(bagSize + 1).fill(0);

  // 先遍历背包容量
  for (let i = 1; i <= bagSize; i++) {
    for (let j = 0; j < weight.length; j++) {
      if (i >= weight[j]) {
        dp[i] = Math.max(dp[i], dp[i - weight[j]] + value[j]);
      }
    }
  }

  console.log(dp);
}

completeBag_1([1, 3, 5], [15, 20, 30], 4);
completeBag_2([1, 3, 5], [15, 20, 30], 4);
