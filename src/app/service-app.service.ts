import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Joke } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServiceAppService {
  joke: Joke = { id: 1, type: '', setup: '', punchline: '' };

  constructor(private http: HttpClient) {}

  getJokeFromApi(): Observable<any> {
    return this.http.get('https://joke.deno.dev').pipe(
      tap((apiJoke: any) => {
        this.joke = apiJoke;
        console.log(this.joke);
      })
    );
  }
}
