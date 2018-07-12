import { Observable } from "rxjs/internal/Observable";

export interface ICoreApiService {
    searchPlayers(team:string): Observable<any>;
    searchAllTeams(league:string): Observable<any>;
}

