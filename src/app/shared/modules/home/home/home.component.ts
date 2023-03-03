import { Component, Input } from '@angular/core';
import * as $ from "jquery";

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
      if (this.lessThan0) {
        this.applyFadeOut();
      }
    }
    else {
      this._counter = value;
      if (this.lessThan0) {
        this.applyFadeOut();
      }
    }
  }
  get counter() {
    return this._counter;
  }

  increaseCounter() {
    this.counter++;
    if (this.lessThan0) {
      this.applyFadeOut();
    }
  }

  decreaseCounter() {
    if (this.counter > 0) this.counter--;
    else {
      this.applyFadeIn();
    }
  }

  applyFadeIn() {
    this.lessThan0 = true;
    $(".errorMsg").removeClass("fadeOut");
    $(".errorMsg").addClass("fadeIn");
  }
  applyFadeOut() {
    this.lessThan0 = false;
    $(".errorMsg").removeClass("fadeIn");
    $(".errorMsg").addClass("fadeOut");
  }
}
