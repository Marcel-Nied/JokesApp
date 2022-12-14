import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Category, CreatedJoke, MockedJoke } from './interfaces';
import { mockedCategories, mockedJokes } from './mocked-data';

@Injectable({
  providedIn: 'root',
})
export class ServiceAppService {
  mockedJokes: MockedJoke[] = mockedJokes;
  mockedCategories: Category[] = mockedCategories;

  jokeCounter: number = 0;
  isJokeExist: boolean = true;
  displayDialog: boolean = false;

  createdJoke: CreatedJoke = { category: '', content: '', id: 0 };
  createdJokes: CreatedJoke[] = [];

  selectedCategory!: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  // getJokeFromApi(): Observable<any> {
  //   return this.http.get('https://joke.deno.dev').pipe(
  //     tap((apiJoke: any) => {
  //       this.joke = apiJoke;
  //       console.log(this.joke);
  //     })
  //   );
  // }

  changeCategoryName() {
    this.mockedJokes = this.mockedJokes.map((el) => {
      if (el.category === 'b99be362-7044-4bca-aed2-e734f7999e5e') {
        return {
          id: el.id,
          category: (el.category = mockedCategories[0].name),
          content: el.content,
        };
      }
      if (el.category === 'e451c8bc-667e-4b3a-a38e-c4b782ac3751') {
        return {
          id: el.id,
          category: (el.category = mockedCategories[1].name),
          content: el.content,
        };
      }
      if (el.category === '8ad0481c-c85c-4b5e-98e0-77711a65f841') {
        return {
          id: el.id,
          category: (el.category = mockedCategories[2].name),
          content: el.content,
        };
      }
      console.log('el', el);
      return el;
    });
    return this.mockedJokes;
  }

  showDialog() {
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
  }

  selectCategory(event: any) {
    this.createdJoke.category = event.value.name;
  }

  showNoJokes() {
    this.messageService.add({
      severity: 'error',
      summary: 'Uwaga',
      detail: '??arty si?? sko??czy??y',
    });
  }

  showAddedJokes() {
    this.messageService.add({
      severity: 'success',
      summary: 'Gratulacje',
      detail: '??art zosta?? dodany',
    });
  }

  showNextJoke(): any {
    if (this.mockedJokes.length - 1 > this.jokeCounter) {
      this.jokeCounter++;
    } else {
      this.jokeCounter = 0;
      this.showNoJokes();
      return (this.isJokeExist = false);
    }
  }

  addJoke() {
    this.jokeCounter++;
    this.createdJokes.push({
      category: this.createdJoke.category,
      content: this.createdJoke.content,
      id: this.jokeCounter,
    });
    this.showAddedJokes();
    this.closeDialog();
    this.createdJoke.content = '';
    this.selectedCategory = '';
  }
}
