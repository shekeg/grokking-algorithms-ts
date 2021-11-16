export function approximation(statesNeeded, stations) {
  let statesNeededCopy = new Set(statesNeeded);

  const finalStations = new Set();

  while (statesNeededCopy.size > 0) {
    let bestStation = null;
    let statesCovered = new Set();

    for (const station in stations) {
      const statesForStation = stations[station];
      const covered = new Set(
        [...statesNeededCopy].filter((state) => statesForStation.has(state)),
      );
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    statesNeededCopy = new Set(
      [...statesNeededCopy].filter((state) => !statesCovered.has(state)),
    );
    finalStations.add(bestStation);
  }

  return finalStations;
}
