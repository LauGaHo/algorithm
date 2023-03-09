/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 获取棋盘大小
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // 创建 dp 数组
  // const dp = new Array(m).fill(new Array(n).fill(0));
  const dp = new Array(m).fill().map(() => new Array(n).fill(0));

  // 初始化 dp 数组
  // 初始化第一列
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }
  // 初始化第一行
  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 首先判断当前节点是否存在障碍物
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};

uniquePathsWithObstacles([[0], [1]]);
