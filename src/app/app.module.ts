import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { DisplayPlayersModule } from '../public/features/display-players/display-players.module';
import { SearchLeagueModule } from '../public/features/search-league/search-league.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchLeagueModule,
    DisplayPlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
