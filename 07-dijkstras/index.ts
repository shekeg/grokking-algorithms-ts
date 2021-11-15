export function dijkstras(graph, costs, parents) {
  const processed = [];

  let node = findLowestCostNode(costs);

  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];

    for (const n in neighbors) {
      const newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
  }

  return { cost: costs['fin'], parents };

  function findLowestCostNode(costs) {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (const node in costs) {
      const cost = costs[node];
      if (cost < lowestCost && !processed.includes(node)) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    }
    return lowestCostNode;
  }
}
