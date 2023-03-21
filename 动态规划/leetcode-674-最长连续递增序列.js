/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let max = 1;

  // 创建 dp 数组
  // dp 数组含义：
  // dp[i]: nums 中，0-i 区间中的最长连续递增序列
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    // 这里是单层循环的原因是：连续递增子序列
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
      max = dp[i] > max ? dp[i] : max;
    }
  }

  return max;
};

findLengthOfLCIS([1, 3, 5, 4, 7]);
