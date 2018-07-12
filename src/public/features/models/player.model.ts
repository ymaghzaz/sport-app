export class Player {
    public playerName:string;
    public position :string;
    public cutout : string;
    public dateBorn :string
    public signing:string;
    constructor(playerInfo?:any){
        this.playerName= playerInfo && playerInfo.strPlayer || null;
        this.position = playerInfo && playerInfo.strPosition || null;
        this.dateBorn = playerInfo && playerInfo.dateBorn || null;
        this.signing = playerInfo && playerInfo.strSigning || null;
        this.cutout = playerInfo && playerInfo.strCutout ||  playerInfo && playerInfo.strThumb || 'https://image.flaticon.com/icons/png/128/166/166344.png';
    }
}