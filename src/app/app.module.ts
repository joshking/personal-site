import { routing, appRoutingProviders } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import { WorkComponent } from './work/work.component';
import { IrComponent } from './work/ir/ir.component';
import { DealerspanComponent } from './work/dealerspan/dealerspan.component';
import { IndividualComponent } from './work/individual/individual.component';
import { DellComponent } from './work/dell/dell.component';
import { SofiComponent } from './work/sofi/sofi.component';
import { TimelineComponent } from './work/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    HomeComponent,
    WorkComponent,
    IrComponent,
    DealerspanComponent,
		IndividualComponent,
  	DellComponent,
    SofiComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    MaterialModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
