// ** https://www.hackerrank.com/challenges/tree-preorder-traversal/problem?isFullScreen=true

function preOrder(root) {
  let outputArr = [];
  const spots = [];

  while (root) {
    outputArr.push(root.data);
    if (root.left === null && root.right === null) {
      root = spots.pop();
    } else if (root.left === null) {
      // go to right nodes
      root = root.right;
    } else if (root.right === null) {
      // go to left nodes
      root = root.left;
    } else {
      // there is node on both side, go to left nodes BUT keep a link to right nodes to use later
      spots.push(root.right);
      root = root.left;
    }
  }

  console.log(outputArr.join(' '));
}
