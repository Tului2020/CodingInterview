class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = [];
  }

  addEdge(source, destination) {
    if (!this.nodes[source] || !this.nodes[destination]) return false;
    if (!this.nodes[source].includes(destination)) this.nodes[source].push(destination);
    if (!this.nodes[destination].includes(source)) this.nodes[destination].push(source);
  }

  showNodes() {
    console.log(this.nodes);
  }

  bfs(source, destination) {
    const queue = [source];
    const visitedNodes = {};

    while (queue.length) {
      const currentNode = queue.shift();
      if (visitedNodes[currentNode]) continue; // see if visited

      if (currentNode === destination) return true; // see if its destination

      visitedNodes[currentNode] = true; // mark as visted

      this.nodes[currentNode].forEach(c => (!visitedNodes[c]) && queue.push(c));
    }

    return false;
  }

  dfs(source, destination, visitedNodes = {}) {
    if (visitedNodes[source]) return false;
    if (source === destination) return true;

    visitedNodes[source] = true;

    return this.nodes[source].reduce((acc, neighbor) => acc || this.dfs(neighbor, destination, visitedNodes), false);
  }

}

/**
 Vova - Tim 
//       |   \
 John - Ann -  Lee
 */

const g = new Graph();
g.addNode('Vova');
g.addNode('Tim');
g.addNode('John');
g.addNode('Ann');
g.addNode('Lee');

g.addEdge('Tim', 'Vova');
g.addEdge('Tim', 'Ann');
g.addEdge('Tim', 'Lee');
g.addEdge('Ann', 'John');
g.addEdge('Ann', 'Lee');

// g.showNodes();
console.log(g.dfs('Vova', 'Johsn'));


