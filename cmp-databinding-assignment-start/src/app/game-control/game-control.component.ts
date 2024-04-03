import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  @Output()
  tick = new EventEmitter<number>();

  interval;
  ticks :number = 0;

  onStart() {
    this.interval = setInterval(() => {
      this.ticks++;
      this.tick.emit(this.ticks);
    },1000)
  }

  onStop() {
    clearInterval(this.interval);
  }
}
