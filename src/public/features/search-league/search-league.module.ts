import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DisplayTeamsComponent } from './display-teams/display-teams.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SearchComponent, DisplayTeamsComponent],
  exports:[SearchComponent]
})
export class SearchLeagueModule { }
