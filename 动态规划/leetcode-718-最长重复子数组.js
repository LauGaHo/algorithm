/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  // 记录最大值
  let max = 0;

  // 创建 dp 数组
  // dp 数组的含义
  // dp[i][j]: nums1 数组中截取 0-i 和 nums2 数组中截取 0-j 的公共子数组长度
  const dp = new Array(nums1.length)
    .fill(0)
    .map((_) => new Array(nums2.length).fill(0));

  // 初始化 dp 数组
  // 初始化第一行
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === nums2[0]) {
      dp[i][0] = 1;
      max = dp[i][0] > max ? dp[i][0] : max;
    }
  }

  // 初始化第一列
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] === nums1[0]) {
      dp[0][i] = 1;
      max = dp[0][i] > max ? dp[0][i] : max;
    }
  }

  // 循环开启
  for (let i = 1; i < nums1.length; i++) {
    for (let j = 1; j < nums2.length; j++) {
      // 如果两个值相等，则向上追溯两个数组对应相等位置的前一个位置 dp 值
      if (nums1[i] === nums2[j]) {
        // 递推公式找前一个 dp[i - 1][j - 1]
        dp[i][j] = dp[i - 1][j - 1] + 1;
        max = dp[i][j] > max ? dp[i][j] : max;
      }
    }
  }

  return max;
};

findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]);
