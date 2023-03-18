/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 获取 nums 和的一半
  let sum = nums.reduce((pre, cur) => {
    return pre + cur;
  }, 0);

  // sum 为奇数，直接返回 false
  if (sum & 1) {
    return false;
  }

  // 将 sum 除以 2 得到目标值
  sum = sum / 2;

  // 创建 dp 数组，含义为：背包容量为 i 的时候，背包中的和为 dp[i]
  const dp = new Array(sum + 1).fill(0);

  // 遍历物品
  for (let i = 0; i < nums.length; i++) {
    // 遍历背包
    for (let j = sum; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  return dp[dp.length - 1] === dp.length - 1;
};

canPartition([1, 5, 11, 5]);
