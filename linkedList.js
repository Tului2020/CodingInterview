class SinglyNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new SinglyNode(1);
const node2 = new SinglyNode(2);
const node3 = new SinglyNode(3);
const node4 = new SinglyNode(4);
const node5 = new SinglyNode(5);
const node6 = new SinglyNode(6);
const node7 = new SinglyNode(7);
const node8 = new SinglyNode(8);
const node9 = new SinglyNode(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;

const traverse = (startingNode) => {
  let currentNode = startingNode;
  process.stdout.write(currentNode.val, "-> ");

  while (currentNode.next) {
    currentNode = currentNode.next;
    process.stdout.write(currentNode.val, "-> ");
  }
};

const recursiveTraverse = (currentNode) => {
  process.stdout.write(`${currentNode.val} ${currentNode.next ? "-> " : "\n"}`);
  if (currentNode.next) recursiveTraverse(currentNode.next);
};

const insertAtBegin = (headNode, val) => {
  const newHead = new SinglyNode(val);
  newHead.next = headNode;
  return newHead;
};

const insertAtEnd = (headNode, val) => {
  let lastNode = headNode;

  while (lastNode.next) {
    lastNode = lastNode.next;
  }

  lastNode.next = new SinglyNode(val);
  return lastNode.next;
};

const insertAt = (prevNode, val) => {
  const newNode = new SinglyNode(val);
  newNode.next = prevNode.next;
  prevNode.next = newNode;
};

const deleteNode = (currentNode, delNode) => {
  if (currentNode === delNode) currentNode.next = null;

  while (currentNode.next) {
    if (currentNode.next === delNode) {
      currentNode.next = currentNode.next.next;
      return;
    }
    currentNode = currentNode.next;
  }
};

const searchNode = (currentNode, searchVal) => {
  while (currentNode.next) {
    if (currentNode.val === searchVal) {
      return true;
    }

    currentNode = currentNode.next;
  }
  return false;
};

const updateNode = (currentNode, oldVal, newVal) => {
  while (currentNode.next) {
    if (currentNode.val === oldVal) currentNode.val = newVal;
    currentNode = currentNode.next;
  }
};

const node0 = insertAtBegin(node1, 0); // adds node0 at the beginning
const node10 = insertAtEnd(node0, 10); // adds node10 at the end
insertAt(node6, 6.5); // adds node6.5 after node6
insertAt(node6, 6.5); // adds node6.5 after node6
insertAt(node6, 6.5); // adds node6.5 after node6
deleteNode(node0, node10); // deletes node10 at the end
updateNode(node0, 6.5, 6.9);

console.log("\n");
console.log("<------------------- START ------------------->");
console.log("\n   <------------- regular ------------->");
recursiveTraverse(node0);
console.log("   <------------- regular ------------->");

const reverseLL = (currentNode) => { // non recursive solution
  let tempNext = null;
  let tempPrev = null;

  while(currentNode) {
    tempNext = currentNode.next; // saving next
    currentNode.next = tempPrev; // pointing next to previous node

    tempPrev = currentNode;
    currentNode = tempNext; // last two lines move to the next node
  };
  return tempPrev;
};


reverseLL(node0);
console.log("\n   <------------- reverse (1x) ------------->");
recursiveTraverse(node9);
console.log("   <------------- reverse (1x) ------------->");

const reverseLLR = (currentNode, prev = null) => {
  if (!currentNode) return prev;

  const tempNext = currentNode.next;
  currentNode.next = prev;
  
  return reverseLLR(tempNext, currentNode);
}

console.log("\n   <------------- reverse (2x) ------------->");
reverseLLR(node9);
recursiveTraverse(node0);
console.log("   <------------- reverse (2x) ------------->");


console.log("\n<------------------- END ------------------->\n");
