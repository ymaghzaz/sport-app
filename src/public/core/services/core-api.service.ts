import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ICoreApiService } from '../interfaces/core-api.service.interface';
import { SearchAllTeamsApi, SearchPlayersApi } from '../../features/commun/api';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class CoreApiService implements ICoreApiService {
  public constructor(private http: HttpClient) {}
  public searchAllTeams(league:string): Observable<any> {
    return this.http.get(`${SearchAllTeamsApi}${encodeURI(league)}`)
  }
  public searchPlayers(team:string): Observable<any> {
    return this.http.get(`${SearchPlayersApi}${encodeURI(team)}`)
  }
}