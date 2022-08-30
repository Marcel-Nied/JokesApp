import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JokesComponent } from './jokes/jokes.component';
import { MainJokesComponent } from './main-jokes/main-jokes.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JokesComponent,
    MainJokesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    BrowserAnimationsModule,
    RippleModule,
    DynamicDialogModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
