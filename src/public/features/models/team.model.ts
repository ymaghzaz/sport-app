

export class Team {
    public idTeam :Number;
    public strTeam:string;
    public strTeamBadge : string;
    constructor(teamInfo?:any){
        this.idTeam = teamInfo && teamInfo.idTeam || null;
        this.strTeam = teamInfo && teamInfo.strTeam || null;
        this.strTeamBadge = teamInfo && teamInfo.strTeamBadge || null;
    }
}