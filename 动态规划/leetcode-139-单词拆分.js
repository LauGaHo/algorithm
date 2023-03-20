/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 获取背包容量
  const bagSize = s.length;

  // 创建 dp 数组
  const dp = new Array(bagSize + 1).fill(false);

  // 初始化 dp 数组
  dp[0] = true;

  // 这里其实是一个排列问题，所以需要先遍历背包，再遍历物品
  // 先遍历背包
  for (let j = 1; j <= bagSize; j++) {
    // 再遍历物品
    for (let i = 0; i < wordDict.length; i++) {
      // 当前背包容量大于物品质量
      if (j >= wordDict[i].length) {
        // 在 s 中切割出 wordDict[i] 单词并判断是否符合全等规则
        // 并且查看 dp[j - wordDict[i]] 是否为 true
        if (
          s.slice(j - wordDict[i].length, j) === wordDict[i] &&
          dp[j - wordDict[i].length]
        ) {
          // 如果两个条件都符合，则为 true
          dp[j] = true;
        }
      }
    }
  }

  return dp[bagSize];
};

wordBreak("leetcode", ["leet", "code"]);

wordBreak("applepenapple", ["apple", "pen"]);

wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);
