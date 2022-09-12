import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces';
import { ServiceAppService } from '../service-app.service';

@Component({
  selector: 'app-addidng-joke',
  templateUrl: './addidng-joke.component.html',
  styleUrls: ['./addidng-joke.component.scss'],
})
export class AddidngJokeComponent implements OnInit {
  selectedCategory: Category = { id: '', name: '', code: '' };

  constructor(public serviceJoke: ServiceAppService) {}

  ngOnInit(): void {}
}
