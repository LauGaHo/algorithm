/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  // 这道题目本质上还是求最长公共子序列，代码 copy 一下就可以

  // 创建 dp 数组
  // dp 数组含义：
  // dp[i][j]: nums1 中前 i 个元素和 nums2 中前 j 个元素有 dp[i][j] 条不相交的线段
  const dp = new Array(nums1.length)
    .fill()
    .map((_) => new Array(nums2.length).fill(0));

  // 初始化 dp 数组
  dp[0][0] = nums1[0] === nums2[0] ? 1 : 0;
  for (let i = 1; i < nums1.length; i++) {
    dp[i][0] = nums2[0] === nums1[i] ? 1 : dp[i - 1][0];
  }

  for (let j = 1; j < nums2.length; j++) {
    dp[0][j] = nums2[j] === nums1[0] ? 1 : dp[0][j - 1];
  }

  // 开启循环
  for (let i = 1; i < nums1.length; i++) {
    for (let j = 1; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[nums1.length - 1][nums2.length - 1];
};

maxUncrossedLines([1, 4, 2], [1, 2, 4]);
