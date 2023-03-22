/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // 创建 dp 数组
  // dp 数组含义：
  // dp[i][j]: text1 字符串中前 i 位和 text2 字符串中前 j 位的最长公共子序列的长度
  const dp = new Array(text1.length)
    .fill()
    .map((_) => new Array(text2.length).fill(0));

  // 初始化 dp 数组
  dp[0][0] = text2[0] === text1[0] ? 1 : 0;
  for (let i = 1; i < text1.length; i++) {
    dp[i][0] = text2[0] === text1[i] ? 1 : dp[i - 1][0];
  }

  for (let j = 1; j < text2.length; j++) {
    dp[0][j] = text2[j] === text1[0] ? 1 : dp[0][j - 1];
  }

  // 循环
  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      // 当前 text1 中的第 i 个字符 === 当前 text2 中的第 j 个字符
      if (text1[i] === text2[j]) {
        // 那么 dp[i][j] = dp[i - 1][j - 1] + 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 反之则取 dp[i - 1][j] 和 dp[i][j - 1] 之间的一个较大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length - 1][text2.length - 1];
};
