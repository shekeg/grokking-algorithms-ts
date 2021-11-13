export function findMangoSeller(graph: { [key: string]: Array<string> }) {
  const searchQueue = [];
  const searched = [];

  searchQueue.push(...graph.you);

  while (searchQueue.length) {
    const person = searchQueue.shift();

    if (searched.includes(person)) {
      continue;
    }

    if (isMangoSeller(person)) {
      return person;
    }

    searchQueue.push(...graph[person]);
    searched.push(person);
  }
  return;
}

function isMangoSeller(person: string) {
  return person.slice(-1) === 'm';
}
