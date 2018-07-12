import { DisplayPlayersModule } from './display-players.module';

describe('DisplayPlayersModule', () => {
  let displayPlayersModule: DisplayPlayersModule;

  beforeEach(() => {
    displayPlayersModule = new DisplayPlayersModule();
  });

  it('should create an instance', () => {
    expect(displayPlayersModule).toBeTruthy();
  });
});
