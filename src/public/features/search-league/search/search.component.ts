import { Component, OnInit ,Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Http } from '@angular/http';
import { map,debounceTime , distinctUntilChanged  , switchMap , filter , startWith} from 'rxjs/operators';
import { Team } from '../../models/team.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';
import { I_CORE_API_SERVICE } from '../../../core/interfaces/core-api.service.token';
import { ICoreApiService } from '../../../core/interfaces/core-api.service.interface';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy{
  private unsubscribe$: Subject<void> = new Subject<void>();
  //French Ligue 1 
  public championInputName$ : BehaviorSubject<string> = new BehaviorSubject('German Bundesliga');
  constructor(     @Inject(I_CORE_API_SERVICE) public apiService: ICoreApiService, ) { }
  teams : Team[] = [];
  ngOnInit() {
     this.championInputName$.pipe(
      debounceTime(500),
      distinctUntilChanged(), 
      filter(inputText => inputText && inputText.length > 0),
       switchMap(league =>  this.apiService.searchAllTeams(league)) , 
        takeUntil(this.unsubscribe$)).subscribe( res =>{
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
