/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // 计算 nums 数组中的和
  let sum = nums.reduce((pre, cur) => {
    return pre + cur;
  }, 0);

  if (Math.abs(target) > sum) {
    return 0;
  }

  // 将 sum 加上 target 得出的结果用于计算背包大小
  sum = sum + target;

  // 如果是奇数
  if (sum & 1) {
    return 0;
  }

  // 获取背包大小
  const bagSize = sum / 2;

  // 创建 dp 数组
  const dp = new Array(bagSize + 1).fill(0);

  // 初始化 dp[1]
  dp[0] = 1;

  // 遍历物品
  for (let i = 0; i < nums.length; i++) {
    // 遍历背包大小
    for (let j = bagSize; nums[i] <= j; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[bagSize];
};

findTargetSumWays([1, 1, 1, 1, 1], 3);
