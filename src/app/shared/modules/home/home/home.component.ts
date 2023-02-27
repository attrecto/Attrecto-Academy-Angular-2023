import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() counter: number = 0;
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
    if (this.counter > 0) this.counter--; //ezek
    else {
      this.errorMessage = "A számláló értéke nem merülhet 0 alá!";
      this.decreaseDisabled = true;
    }
  }
}
