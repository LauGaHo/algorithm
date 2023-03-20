/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 创建 dp 数组
  const dp = new Array(nums.length).fill(0);

  // 初始化 dp 数组
  dp[0] = nums[0];
  // 当前为 dpdp[1] 赋值主要就是贯彻判断当前 i 房间偷还是不偷比较划算
  dp[1] = Math.max(nums[0], nums[1]);

  // 遍历房间
  for (let i = 2; i < nums.length; i++) {
    // 这里的关键是，比较当前房间偷还是不偷
    // 偷：dp[i - 2] + nums[i]
    // 不偷：dp[i - 1]
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
};

rob([2, 7, 9, 3, 1]);
