import { LightningElement, api } from 'lwc';

export default class ChildSetter extends LightningElement {
   // _childData;
   //_childUpdatedData;
   _playerName

    // @api
    // get childString() {
    //     return this._childData;
    // }

    // set childString(value) {
    //     // Modify the value passed from parent and store it
    //     this._childData = value.toUpperCase();

    // @api
    //  get childArray()
    // {

    // }
    // set childArray(value)
    // {
    //     //We do the shallow Coppy using spread  operator
            //this._childUpdatedData=[...value];
    //     this._childUpdatedData.push(500);
    //     console.log(this._childUpdatedData.length);
    // }

    @api
    get player()
    {
        return this._playerName
    }

    set player(value)
    {
        this._playerName={...value};
       this._playerName.name=this._playerName.name.toUpperCase();
    // or write in on line
    //this._playerName={...value,name:value.name.toUpperCase()};//shallow Copy
    }

    }

