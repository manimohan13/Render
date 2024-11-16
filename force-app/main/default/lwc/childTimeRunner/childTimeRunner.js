import { LightningElement, api } from 'lwc';

export default class ChildTimeRunner extends LightningElement {
    progress = 0; // progress in seconds
    intervalId;

    // Getter to format time into mm:ss
    get formattedTime() {
        const minutes = Math.floor(this.progress / 60);
        const seconds = this.progress % 60;
        return `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    }

    // Helper method to pad numbers with zero
    padNumber(number) {
        return number < 10 ? '0' + number : number;
    }

    @api start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.progress += 1;
            }, 1000);
            console.log("Timer started");
        }
    }

    @api stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null; // Clear the interval ID
            console.log("Timer stopped");
        }
    }

    @api reset() {
        this.stop(); // Stop the timer before resetting
        this.progress = 0;
        console.log("Timer reset");
    }
}
