import { LightningElement,api } from 'lwc';

export default class ChildCarouselPlayer extends LightningElement {
    @api cssPlayers;             // Array of CSS players from the parent
    @api mumbaiIndiansPlayers;
  _playerName;

    @api 
    get player()
    {
      return this._playerName;
    }
    
    set player(value)
    {
        this._playerName=[...value];
        this._playerName=this._playerName.name.toUpperCase();

    }

}
