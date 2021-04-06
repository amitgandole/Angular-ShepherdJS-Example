import { AfterViewInit, Component } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'poc-app-tour';
  constructor(public shepherdService: ShepherdService) {

  }
  ngAfterViewInit() {
    // this.startTour();
  }

  
}
