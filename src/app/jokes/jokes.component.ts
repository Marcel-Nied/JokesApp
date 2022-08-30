import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit {
  displayDialog: boolean = false;

  constructor() {}

  ngOnInit() {}

  showDialog() {
    this.displayDialog = true;
    console.log('click');
  }
}
