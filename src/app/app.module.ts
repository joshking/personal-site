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
import { WorkOverviewComponent } from './work/work-overview/work-overview.component';

import { IrComponent } from './work/ir/ir.component';

import { DealerspanComponent } from './work/dealerspan/dealerspan.component';
import { DsOverviewComponent } from './work/dealerspan/ds-overview/ds-overview.component';

import { IndividualComponent } from './work/individual/individual.component';
import { IdOverviewComponent } from './work/individual/id-overview/id-overview.component';
import { IdExamplesComponent } from './work/individual/id-examples/id-examples.component';

import { DellComponent } from './work/dell/dell.component';
import { DellOverviewComponent } from './work/dell/dell-overview/dell-overview.component';
import { DellItninjaComponent } from './work/dell/dell-itninja/dell-itninja.component';
import { DellServiceDeskComponent } from './work/dell/dell-service-desk/dell-service-desk.component';

import { SofiComponent } from './work/sofi/sofi.component';
import { TimelineComponent } from './work/timeline/timeline.component';
import { KineticComponent } from './work/kinetic/kinetic.component';

import { OverviewComponent } from './work/kinetic/overview/overview.component';
import { KineticExamplesComponent } from './work/kinetic/kinetic-examples/kinetic-examples.component';
import { DsVidComponent } from './work/dealerspan/ds-vid/ds-vid.component';
import { RedlodgeComponent } from './work/kinetic/redlodge/redlodge.component';
import { SoftwareComponent } from './work/dell/software/software.component';



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
    TimelineComponent,
    KineticComponent,
    OverviewComponent,
    KineticExamplesComponent,
    DsOverviewComponent,
    DsVidComponent,
    RedlodgeComponent,
    IdOverviewComponent,
    IdExamplesComponent,
    DellOverviewComponent,
    DellItninjaComponent,
    DellServiceDeskComponent,
    SoftwareComponent,
    WorkOverviewComponent
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
