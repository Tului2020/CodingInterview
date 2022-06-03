const { Node, a, b, c, d, e, f } = require('./BinaryTree');

const bfsTraverse = (rootNode) => {
  const queue = [rootNode];

  while (queue.length) {
    if (queue[0].left) queue.push(queue[0].left);
    if (queue[0].right) queue.push(queue[0].right);
    console.log(queue.shift().val);
  }
}

const bfs = (rootNode, target) => {
  const queue = [rootNode];

  while (queue.length) {
    if (queue[0].left) queue.push(queue[0].left);
    if (queue[0].right) queue.push(queue[0].right);
    if (queue.shift().val === target) return true;
  }

  return false;
}

const sumTree = (headNode) => {
  const queue = [headNode];
  let sum = 0;

  while (queue.length) {
    if (queue[0].left) queue.push(queue[0].left);
    if (queue[0].right) queue.push(queue[0].right);
    sum += queue.shift().val;
  }

  return sum;
}

bfsTraverse(a);
console.log(bfs(a, 5));
console.log(sumTree(a));