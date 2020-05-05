import { Component, OnInit } from '@angular/core';
import { UtilService } from '../node-services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public utilService: UtilService;
  public title = 'electron-angular-app';
  constructor() {
   this.utilService =  new UtilService();
  }

  public ngOnInit() {
    console.log(`Operating System : ${this.utilService.getOperatingSystem()}`);
    console.log(`Reversed String : ${this.utilService.getReversedString('Angular8')}`);
  }
}
