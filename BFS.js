class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');


//      a
//    /   \
//   b     c
//  / \     \
// d   e     f



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


// console.log(bfs(a, 'b'));


const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

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

console.log(sumTree(a));