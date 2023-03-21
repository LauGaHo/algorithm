/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let max = 1;

  // 创建 dp 数组
  // dp 数组的含义：
  // dp[i]: 在 nums 数组中，0-i 位置上的最长递增子序列为 dp[i]
  const dp = new Array(nums.length).fill(1);

  // 循环遍历
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= i; j++) {
      // 这里的关键逻辑就在于：
      // nums[i] 的最长递增子序列是取决于 i 之前各个位置的最长递增子序列
      if (nums[i] > nums[j]) {
        // 如果 nums[i] > nums[j]，那么 dp[i] 就可以等于 dp[j] + 1
        // 其中 j 是 0-i 之间的某一个位置
        dp[i] = Math.max(dp[j] + 1, dp[i]);
        max = dp[i] > max ? dp[i] : max;
      }
    }
  }

  return max;
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
