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
      console.log(currentNode);
      if (visitedNodes[currentNode]) continue;

      if (currentNode === destination) return true;

      visitedNodes[currentNode] = true;

      this.nodes[currentNode].forEach(edge => !visitedNodes[edge] && queue.push(edge));
    }

    return false;
  }

  dfs(source, destination, visitedNodes = {}) {
    if (visitedNodes[source]) return false;
    if (source === destination) return true;

    visitedNodes[source] = true;

    return this.nodes[source].reduce((found, edge) => found || this.dfs(edge, destination, visitedNodes), false);
  }

}

/**
 Vova - Tim 
//       |   \
 John - Ann -  Lee
 */

//  BFS => Vova, Tom, Ann, Lee, John
//  DFS => Vova, Tim, Ann, John, Lee

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
console.log(g.bfs('Vova', 'John'));
// console.log(g.dfs('Vova', 'Lee'));


