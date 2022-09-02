import { Component, OnInit } from '@angular/core';
import { ServiceAppService } from '../service-app.service';

@Component({
  selector: 'app-card-joke',
  templateUrl: './card-joke.component.html',
  styleUrls: ['./card-joke.component.scss'],
})
export class CardJokeComponent {
  displayDialog: boolean = false;
  constructor(public serviceJoke: ServiceAppService) {}

  showDeletingDialog() {
    this.displayDialog = true;
  }

  closeDeletingDialog() {
    this.displayDialog = false;
  }

  deleteJoke() {
    console.log('should delete joke');
  }
}
