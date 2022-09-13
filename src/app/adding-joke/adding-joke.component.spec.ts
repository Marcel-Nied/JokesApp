import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingJokeComponent } from './adding-joke.component';

describe('AddidngJokeComponent', () => {
  let component: AddingJokeComponent;
  let fixture: ComponentFixture<AddingJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddingJokeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddingJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
