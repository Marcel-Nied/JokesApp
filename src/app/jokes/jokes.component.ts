import { Component, OnInit } from '@angular/core';
import { Category, MockedJoke } from '../interfaces';
import { mockedCategories } from '../mocked-data';
import { ServiceAppService } from '../service-app.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit {
  selectedJoke: MockedJoke = { id: '', category: 'mjnkl', content: '' };

  mockedCategories: Category[] = mockedCategories;

  constructor(public serviceJoke: ServiceAppService) {}

  ngOnInit() {
    this.getJokesFromMockedData();
  }

  // getJokes() {
  //   this.serviceJoke.getJokeFromApi().subscribe();
  // }

  getJokesFromMockedData() {
    this.serviceJoke.changeCategoryName();
  }
}
