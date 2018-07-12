import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Http } from '@angular/http';
import { map,debounceTime , distinctUntilChanged  , switchMap , filter , startWith} from 'rxjs/operators';
import { Team } from '../../models/team.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';
import { SearchAllTeamsApi } from 'src/public/features/commun/api';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy{
  private unsubscribe$: Subject<void> = new Subject<void>();
  //French Ligue 1
  public championInputName$ : BehaviorSubject<string> = new BehaviorSubject('German Bundesliga');
  constructor( private http: Http) { }
  teams : Team[] = [];
  ngOnInit() {
     this.championInputName$.pipe(
      debounceTime(500),
      distinctUntilChanged(), 
      filter(x => x && x.length > 0),
       switchMap(x => this.http.get(`${SearchAllTeamsApi}${encodeURI(x)}`) ) , 
        map(res => res.json() || {teams :[]}) , takeUntil(this.unsubscribe$)).subscribe( res =>{
          if(res.teams){
            this.teams = [];
            res.teams.map( team =>{
              this.teams.push( new Team(team));
            })
          }
      })

  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onKey(event){
    this.championInputName$.next(event.target.value)
  }

}
