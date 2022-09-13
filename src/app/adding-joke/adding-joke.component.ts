import { Component, OnInit } from '@angular/core';
import { ServiceAppService } from '../service-app.service';

@Component({
  selector: 'app-addidng-joke',
  templateUrl: './adding-joke.component.html',
  styleUrls: ['./adding-joke.component.scss'],
})
export class AddingJokeComponent implements OnInit {
  constructor(public serviceJoke: ServiceAppService) {}

  ngOnInit(): void {}
}
