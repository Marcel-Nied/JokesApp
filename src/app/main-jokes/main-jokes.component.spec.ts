import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJokesComponent } from './main-jokes.component';

describe('MainJokesComponent', () => {
  let component: MainJokesComponent;
  let fixture: ComponentFixture<MainJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainJokesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
