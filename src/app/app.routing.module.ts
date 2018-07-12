import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from '../public/features/search-league/search/search.component';
import { PlayersComponent } from '../public/features/display-players/players/players.component';

const APP_MODULE_ROUTES: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'team/:strTeam',
   component:PlayersComponent
  },
  {
    path: 'team',
    redirectTo: '' 
  },
  { path: '**',  redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_MODULE_ROUTES, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

 