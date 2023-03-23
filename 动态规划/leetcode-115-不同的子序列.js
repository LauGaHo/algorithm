/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  // 创建 dp 数组
  // dp 数组的含义：
  // dp[i][j]: s 字符串前 i - 1 个字符中含有多少种 t 字符串 j - 1
  const dp = new Array(s.length + 1)
    .fill()
    .map((_) => new Array(t.length + 1).fill(0));

  // 初始化 dp 数组
  for (let i = 0; i <= s.length; i++) {
    dp[i][0] = 1;
  }

  // 循环
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[s.length][t.length];
};

numDistinct("babgbag", "bag");
