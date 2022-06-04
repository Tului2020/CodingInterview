const { a } = require('./BinaryTree');

const depthFirstTraverseR = (node) => {
  if (!node) return;

  console.log(node.val);
  depthFirstTraverseR(node.left);
  depthFirstTraverseR(node.right);
}

// depthFirstTraverseR(a);
// console.log('<-------------->');

const depthFirstTraverseNR = (headNode) => {
  const stack = [headNode];

  while (stack.length) {
    const lastEl = stack.pop();
    console.log(lastEl.val);
    if (lastEl.right) stack.push(lastEl.right);
    if (lastEl.left) stack.push(lastEl.left);
  }
}

// depthFirstTraverseNR(a);

// const depthFirstSearch = (node, target) => {
//   if (!node) return;
//   if (node.val === target) return true;
//   return !!(depthFirstSearch(node.left, target) || depthFirstSearch(node.right, target));
// }

// console.log(depthFirstSearch(a, -100));


const sumTree = (node) => {
  if (!node) return 0;

  return node.val + sumTree(node.left) + sumTree(node.right);
}

console.log(sumTree(a));


