/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length;
  if (length === 0) return 0;
  if (length === 1) return nums[0];
  // 分开两种情况来进行计算
  // 取第一个元素，不取最后一个
  const result1 = robRange(0, length - 2, nums);
  // 不取第一个元素，取最后一个
  const result2 = robRange(1, length - 1, nums);
  // 比较两个变量的最大值
  return Math.max(result1, result2);
};

const robRange = (start, end, nums) => {
  if (start === end) return nums[start];
  const dp = new Array(nums.length).fill(0);
  // 这里的关键是，当前第 i 个元素取还是不取
  // 取：dp[i - 2] + nums[i]
  // 不取：dp[i - 1]
  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    // 取：dp[i - 2] + nums[i]
    // 不取：dp[i - 1]
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[end];
};

rob([1, 2, 3, 1]);
