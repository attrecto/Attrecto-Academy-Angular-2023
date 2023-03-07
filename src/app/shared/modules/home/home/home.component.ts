import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private _counter: number = 0;
  errorMessage: string = "A számláló értéke nem merülhet 0 alá!";
  lessThan0: boolean = false;
  @Input()
  set counter(value: number) {
    if (value < 0 || isNaN(value)) {
      this._counter = 0;
      if (this.lessThan0) this.lessThan0 = false;
    }
    else {
      this._counter = value;
      if (this.lessThan0) this.lessThan0 = false;
    }
  }
  get counter() {
    return this._counter;
  }

  increaseCounter() {
    this.counter++;
    if (this.lessThan0) this.lessThan0 = false;
  }

  decreaseCounter() {
    if (this.counter > 0) this.counter--;
    else this.lessThan0 = true;
  }
}
