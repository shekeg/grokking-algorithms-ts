import { approximation } from './approximation';

describe('08-greedy-algorithms/approximation', () => {
  it.only('should choose station to cover states ', () => {
    const statesNeeded = new Set([
      'mt',
      'wa',
      'or',
      'id',
      'nv',
      'ut',
      'ca',
      'az',
    ]);

    const stations = {};
    stations['kone'] = new Set(['id', 'nv', 'ut']);
    stations['ktwo'] = new Set(['wa', 'id', 'mt']);
    stations['kthree'] = new Set(['or', 'nv', 'ca']);
    stations['kfour'] = new Set(['nv', 'ut']);
    stations['kfive'] = new Set(['ca', 'az']);

    expect(approximation(statesNeeded, stations)).toEqual(
      new Set(['kone', 'ktwo', 'kthree', 'kfive']),
    );
  });
});
