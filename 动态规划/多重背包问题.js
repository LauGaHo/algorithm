// 多重背包问题，本质是将其转化为 01 背包问题
function multipleBag_1(weightArr, valueArr, amountArr, bagSize) {
  // 创建 dp 数组
  const dp = new Array(bagSize + 1).fill(0);
  // 遍历物品
  for (let i = 0; i < weightArr.length; i++) {
    // 遍历物品个数
    for (let j = 0; j < amountArr[i]; j++) {
      // 遍历背包容量
      for (let k = bagSize; k >= weightArr[i]; k++) {
        dp[k] = Math.max(dp[k], dp[k - weightArr[i]] + valueArr[i]);
      }
    }
  }
  console.log(dp);
}

multipleBag_1([1, 3, 4], [15, 20, 30], [2, 3, 2], 10);

// 将 amountArr 合并到 weightArr 和 valueArr 数组中
function multipleBag_2(weightArr, valueArr, amountArr, bagSize) {
  // 改变数据源，将所有合并到 weightArr 和 valueArr
  for (let i = 0, length = amountArr.length; i < length; i++) {
    while (amountArr[i] > 1) {
      weightArr.push(weightArr[i]);
      valueArr.push(valueArr[i]);
      amountArr[i]--;
    }
  }

  const goodsNum = weightArr.length;
  const dp = new Array(bagSize + 1).fill(0);
  // 遍历物品
  for (let i = 0; i < goodsNum; i++) {
    // 遍历背包容量
    for (let j = bagSize; j >= weightArr[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weightArr[i]] + valueArr[i]);
    }
  }

  console.log(dp);
}

multipleBag_2([1, 3, 4], [15, 20, 30], [2, 3, 2], 10);
