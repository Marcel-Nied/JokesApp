import { Component, OnInit } from '@angular/core';
import { ServiceAppService } from '../service-app.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit {
  displayDialog: boolean = false;
  autoResize: boolean = true;

  constructor(public jokeService: ServiceAppService) {}

  ngOnInit() {
    this.getJokes();
  }

  getJokes() {
    this.jokeService.getJokeFromApi().subscribe();
  }

  showDialog() {
    this.displayDialog = true;
    console.log('click');
  }

  closeDialog() {
    this.displayDialog = false;
  }

  refreshJoke() {
    this.getJokes();
  }
}
