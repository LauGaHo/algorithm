/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 创建 dp 数组
  // dp 数组含义：
  // dp[i][j]: word1 前 i - 1 个字符转换成 word2 前 j - 1 个字符所使用的最少操作数
  const dp = new Array(word1.length + 1)
    .fill()
    .map((_) => new Array(word2.length + 1).fill(0));

  // 初始化 dp 数组
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= word2.length; j++) {
    dp[0][j] = j;
  }

  // 循环
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          // 删除 word1 最后一个字符
          dp[i - 1][j] + 1,
          // 在 word1 增加一个字符
          // 这里有一种方式比较好理解：
          // 有 word1 = "abc"，word2 = "abcd"，因为我们已经在 word1 的末尾插入了一个和 word2 的最后一个字符相同的字符，所以我们不需要再考虑这两个字符的差异。我们只需要关注 word1 和 word2 的前三个字符是否相同，也就是 abc 和 abc。
          dp[i][j - 1] + 1,
          // 在 word1 替换一个字符，替换之后，word1 和 word2 的最后一个字符就会相等的，这个时候前边的字符即可
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }

  return dp[word1.length][word2.length];
};

minDistance("horse", "ros");
