/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // 创建 dp 数组
  // dp 数组含义：
  // dp[i][j]: 字符串 s 中 i - 1 之前和字符串 t 中 j - 1 之前的最长子序列长度
  const dp = new Array(s.length + 1)
    .fill()
    .map((_) => new Array(t.length + 1).fill(0));

  // 开启循环
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // s 和 t 的最大子序列长度等于 s 的长度，说明 t 中包含 s
  return dp[s.length][t.length] === s.length;
};

isSubsequence("abc", "ahbgdc");
