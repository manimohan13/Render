import { LightningElement } from 'lwc';

export default class ParentFindTopScorer extends LightningElement {
    players = [];
    playerName = '';
    score = '';
    team = '';
    topScorerName = '';
    topScorerScore = '';

    handlePlayerNameChange(event) {
        this.playerName = event.target.value;
    }

    handleScoreChange(event) {
        this.score = event.target.value;
    }

    handleTeamChange(event) {
        this.team = event.target.value;
    }

    handleClicAddMore() {
        if (this.playerName && this.score && this.team) {
            const newPlayer = {
                playerName: this.playerName,
                score: parseInt(this.score),
                team: this.team
            };

            // Add the new player to the array
            this.players = [...this.players, newPlayer];
            console.log(JSON.stringify(this.players));

            // Enable the "Top Scorer" button
            this.refs.findTopScorer.disabled=false;//enable

            // Clear input fields
            this.refs.name.value = '';
            this.refs.score.value = '';
            this.refs.team.value = '';
        } else {
            alert('Please fill out all fields before adding a player.');
        }
    }

    handleClickTopScorer() {
        if (this.players.length > 0) {
            // Find the top scorer
            const topScorer = this.players.reduce((prev, current) => {
                return prev.score > current.score ? prev : current;
                console.log(topScorer);
                
            });

            // Update child component with the top scorer data
            this.topScorerName = topScorer.playerName;
            this.topScorerScore = topScorer.score;
        } else {
            alert('No players have been added yet.');
            
        }
    }
}
