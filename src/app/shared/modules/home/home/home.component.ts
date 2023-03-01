import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private _counter: number = 0;

  @Input()
  set counter(value: number) {
    if (value < 0)
      this._counter = 0;
    else
      this._counter = value;
  }
  get counter() {
    return this._counter;
  }
  errorMessage: string = "";
  decreaseDisabled: boolean = false;

  increaseCounter() {
    if (this.decreaseDisabled) {
      this.errorMessage = "";
      this.decreaseDisabled = false;
    }
    this.counter++;
  }

  decreaseCounter() {
    if (this.counter > 0) this.counter--;
    else {
      this.errorMessage = "A számláló értéke nem merülhet 0 alá!";
      this.decreaseDisabled = true;
    }
  }
}
