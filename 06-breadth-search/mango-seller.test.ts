import { findMangoSeller } from './mango-seller';

describe('06-breadth-search/mango-seller', () => {
  it.only("should find person who's name ends with m", () => {
    const graph = {};
    graph['you'] = ['alice', 'bob', 'claire'];
    graph['bob'] = ['anuj', 'peggy'];
    graph['alice'] = ['peggy'];
    graph['claire'] = ['thom', 'jonny'];
    graph['anuj'] = [];
    graph['peggy'] = [];
    graph['thom'] = [];
    graph['jonny'] = [];

    expect(findMangoSeller(graph)).toEqual('thom');
  });

  it.only('should return undefined if there is no person with m at the end', () => {
    const graph = {};
    graph['you'] = ['alice', 'bob'];
    graph['bob'] = ['anuj', 'peggy'];
    graph['alice'] = ['peggy'];
    graph['anuj'] = [];
    graph['peggy'] = [];
    graph['thom'] = [];
    graph['jonny'] = [];

    expect(findMangoSeller(graph)).toEqual(undefined);
  });
});
