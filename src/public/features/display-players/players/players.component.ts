import { Component, OnInit } from '@angular/core';
import { switchMap  } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { map } from 'rxjs/internal/operators/map';
import { Player } from '../../models/player.model';
import { SearchPlayersApi } from '../../commun/api';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit  , OnDestroy{
  private unsubscribe$: Subject<void> = new Subject<void>();
  public players : Player[] = []

  constructor(private route: ActivatedRoute,
    private router: Router, private http: Http) { }

  ngOnInit() {
      this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
       this.http.get(`${SearchPlayersApi}${encodeURI(params.get('strTeam'))}`)
      ) , map(res => res.json() || {player :[]}),takeUntil(this.unsubscribe$)
    ).subscribe(res =>{
      if(res.player){
        res.player.map( player =>{
          this.players.push( new Player(player))
        })
      }
    });
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
