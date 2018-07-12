import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players/players.component';

import { PlayerInfoComponent } from './player-info/player-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlayersComponent, PlayerInfoComponent],
  exports: [PlayersComponent],
})
export class DisplayPlayersModule { }
