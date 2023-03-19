/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  // 创建 dp 数组并进行初始化操作
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  // 遍历物品
  for (let i = 0; i < strs.length; i++) {
    let numberOfZero = 0;
    let numberOfOne = 0;

    // 获取当前物品中有多少个 1 和多少个 0
    for (let j = 0; j < strs[i].length; j++) {
      strs[i][j] == 0 ? numberOfZero++ : numberOfOne++;
    }

    // 遍历背包中 0 的大小
    for (let j = m; j >= numberOfZero; j--) {
      // 遍历背包中 1 的大小
      for (let k = n; k >= numberOfOne; k--) {
        // 根据当前物品，推算出最大值
        dp[j][k] = Math.max(
          dp[j][k],
          dp[j - numberOfZero][k - numberOfOne] + 1
        );
      }
    }
  }

  return dp[m][n];
};

findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3);
