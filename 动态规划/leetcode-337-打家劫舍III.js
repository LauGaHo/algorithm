/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const robTree = (node) => {
    // 终止条件
    if (node === null) {
      return [0, 0];
    }

    // 后序递归
    const leftDp = robTree(node.left);
    const rightDp = robTree(node.right);

    // dp 数组的含义如下
    // dp[0]：当前节点不偷对应的最大金钱数
    // dp[1]：当前节点偷对应的最大金钱数
    const dp = new Array(2);
    // 当前节点不偷，其左右孩子节点既可以偷，也可以不偷，取决于偷和不偷哪个值最大
    dp[0] = Math.max(leftDp[0], leftDp[1]) + Math.max(rightDp[0], rightDp[1]);
    // 当前节点偷，其左右孩子就不能够偷
    dp[1] = leftDp[0] + rightDp[0] + node.val;
    // 向上一级返回 dp 数组
    return dp;
  };

  const dp = robTree(root);

  return Math.max(...dp);
};
