import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() counter: number = 0;
  increaseCounter(){
    if(this.counter <= 0){
      hideAlert();
    }
    this.counter++;
  }
  decreaseCounter(){
    if(this.counter > 0){
      this.counter--;
    }
    else{
      showAlert();
    }
  }

}
function showAlert() {
  const alertBox = document.getElementById('alert');
  alertBox.style.display = 'block';
}

function hideAlert() {
  const alertBox = document.getElementById('alert');
  alertBox.style.display = 'none';
}
