class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

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
}


bfs(a);


