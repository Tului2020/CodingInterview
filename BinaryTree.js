class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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

module.exports = {
  Node,
  a, b, c, d, e, f
}

//           a(3)
//         /     \
//       b(2)     c(7)
//      /    \        \
//    d(4)   e(-2)    f(5)

