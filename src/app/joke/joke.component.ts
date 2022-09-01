import { Component, OnInit } from '@angular/core';
import { ServiceAppService } from '../service-app.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent implements OnInit {
  constructor(public serviceJoke: ServiceAppService) {}

  ngOnInit() {}
}
