import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../../loader/loader.service";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title =  "Welcome to Angular Academy 2023"

  constructor(public loaderService: LoaderService) {
  }

  ngOnInit(): void {
  }


}
