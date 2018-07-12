import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { DisplayTeamsComponent } from './display-teams/display-teams.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [SearchComponent, DisplayTeamsComponent],
  exports:[SearchComponent]
})
export class SearchLeagueModule { }
