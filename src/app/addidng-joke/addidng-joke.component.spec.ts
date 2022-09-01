import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddidngJokeComponent } from './addidng-joke.component';

describe('AddidngJokeComponent', () => {
  let component: AddidngJokeComponent;
  let fixture: ComponentFixture<AddidngJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddidngJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddidngJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
