import { Component } from '@angular/core';
import { ServiceAppService } from '../service-app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public serviceJoke: ServiceAppService) {}
}
