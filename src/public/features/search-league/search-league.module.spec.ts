import { SearchLeagueModule } from './search-league.module';

describe('SearchChampionModule', () => {
  let searchLeagueModule: SearchLeagueModule;

  beforeEach(() => {
    searchLeagueModule = new SearchLeagueModule();
  });

  it('should create an instance', () => {
    expect(searchLeagueModule).toBeTruthy();
  });
});
