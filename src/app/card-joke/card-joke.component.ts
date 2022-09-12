import { Component } from '@angular/core';
import { ServiceAppService } from '../service-app.service';

@Component({
  selector: 'app-card-joke',
  templateUrl: './card-joke.component.html',
  styleUrls: ['./card-joke.component.scss'],
})
export class CardJokeComponent {
  displayDialog: boolean = false;
  selectedJokeId!: number;

  constructor(public serviceJoke: ServiceAppService) {}

  showDeletingDialog(id: number) {
    this.selectedJokeId = id;
    this.displayDialog = true;
  }

  deleteJoke(id: number) {
    this.serviceJoke.createdJokes = this.serviceJoke.createdJokes.filter(
      (joke) => {
        return joke.id !== id;
      }
    );
    this.closeDeletingDialog();
  }

  closeDeletingDialog() {
    this.displayDialog = false;
  }
}
