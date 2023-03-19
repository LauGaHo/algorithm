/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  // 创建 dp 数组
  const dp = new Array(target + 1).fill(0);

  // 初始化 dp 数组
  dp[0] = 1;

  // 注意：该题目是一个排列的问题
  // 遍历背包容量
  for (let j = 1; j <= target; j++) {
    // 遍历物品
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= j) dp[j] += dp[j - nums[i]];
    }
  }

  return dp[target];
};

combinationSum4([1, 2, 3], 4);
