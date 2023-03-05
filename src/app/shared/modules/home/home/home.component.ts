import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  counter: number = 0;
  errorMsg: string = null;
  @Input()
  
  increaseCounter() {
    this.counter++;
    this.errorMsg = null;
  }

  decreaseCounter() {
    if(this.counter>0){
      this.counter--;
      
    }
    else{
       this.counter = 0;
       //alert(this.errorMsg);
       this.errorMsg = "A counter értéke nem lehet negatív";
    }
  }

}
