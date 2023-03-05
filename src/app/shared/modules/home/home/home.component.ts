import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() counter: number = 0;
  warningMessage: string = "";

  increaseCounter() {
    this.counter++;
    this.warningMessage = "";
  }

  decreaseCounter() {
    if (this.counter > 0)
      this.counter--;
    else
      this.warningMessage = "Counter cannot be negative";
  }
}
