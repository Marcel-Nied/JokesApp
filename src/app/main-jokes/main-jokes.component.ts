import { Component } from '@angular/core';
import { ServiceAppService } from '../service-app.service';

@Component({
  selector: 'app-main-jokes',
  templateUrl: './main-jokes.component.html',
  styleUrls: ['./main-jokes.component.scss'],
})
export class MainJokesComponent {
  constructor(public serviceJoke: ServiceAppService) {}
}
