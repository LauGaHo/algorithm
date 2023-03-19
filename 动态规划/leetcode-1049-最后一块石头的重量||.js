/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  // 计算得出石头的总和
  const sum = stones.reduce((pre, cur) => {
    return pre + cur;
  }, 0);

  // 求出石头总和除以二的值 (这里是四舍五入)
  const size = Math.floor(sum / 2);

  // 创建 dp 数组并进行初始化
  const dp = new Array(size + 1).fill(0);

  // 遍历物品
  for (let i = 0; i < stones.length; i++) {
    // 遍历背包，背包的 size 为 sum / 2
    for (let j = size; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  return sum - dp[size] * 2;
};

lastStoneWeightII([2, 7, 4, 1, 8, 1]);
