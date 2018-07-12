import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players/players.component';
import { HttpModule } from '@angular/http';
import { PlayerInfoComponent } from './player-info/player-info.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [PlayersComponent, PlayerInfoComponent],
  exports: [PlayersComponent],
})
export class DisplayPlayersModule { }
