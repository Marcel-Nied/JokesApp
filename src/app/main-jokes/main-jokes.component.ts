import { Component, OnInit } from '@angular/core';
import { ServiceAppService } from '../service-app.service';

@Component({
  selector: 'app-main-jokes',
  templateUrl: './main-jokes.component.html',
  styleUrls: ['./main-jokes.component.scss'],
})
export class MainJokesComponent implements OnInit {
  displayDialog: boolean = false;
  constructor(public serviceJoke: ServiceAppService) {}

  ngOnInit(): void {}

  showDialog() {
    console.log('click');
  }

  showDeletingDialog() {
    this.displayDialog = true;
  }
}
