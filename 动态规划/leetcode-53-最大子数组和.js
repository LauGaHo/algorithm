/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 动态规划

  // 创建 dp 数组
  const dp = new Array(nums.length).fill(0);

  let max = Number.MIN_SAFE_INTEGER;

  // 初始化 dp 数组
  dp[0] = nums[0];
  max = dp[0] > max ? dp[0] : max;

  // 开启循环
  for (let i = 1; i < nums.length; i++) {
    // 如果 i - 1 的最大子序列和跟 nums[i] 相加导致 nums[i] 减少，还不如直接从 nums[i] 位置作为子序列的开头计算后边的元素
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    max = max > dp[i] ? max : dp[i];
  }

  return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
