import { LightningElement, api } from 'lwc';

export default class ChildFindTopScorer extends LightningElement {
    @api playerName;
    @api score;
}
