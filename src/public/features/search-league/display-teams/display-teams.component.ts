import { Component, OnInit , Input } from '@angular/core';
import { Team } from '../../models/team.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-teams',
  templateUrl: './display-teams.component.html',
  styleUrls: ['./display-teams.component.css']
})
export class DisplayTeamsComponent implements OnInit {
  @Input() teams : Team[]=[];
  constructor( public router: Router) { }

  ngOnInit() {
  }
  displayTeamInfo(team:Team){
    this.router.navigate([`/team/${team.strTeam}`])
  }

}
