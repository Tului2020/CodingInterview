const { a } = require('./BinaryTree');

const depthFirstTraverseR = (node) => {
  if (!node) return;
  console.log(node.val);
  depthFirstTraverseR(node.left);
  depthFirstTraverseR(node.right);
}

// console.log('<-------- depthFirstTraverseR -------->');
// depthFirstTraverseR(a);
// console.log('<-------- depthFirstTraverseR -------->');

const depthFirstTraverseNR = (headNode) => {
  const stack = [headNode];

  while (stack.length) {
    const currentNode = stack.pop();
    console.log(currentNode.val);
    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }
}

// depthFirstTraverseNR(a);

const sumTree = (node) => {
  if (!node) return 0;

  return sumTree(node.left) + sumTree(node.right) + node.val;
}

// console.log(sumTree(a));

const DFS = (node, target) => {
  if (!node) return false;
  if (node.val === target) return true;

  return DFS(node.left, target) || DFS(node.right, target);
}

console.log(DFS(a, -12))

