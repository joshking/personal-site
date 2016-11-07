import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { WorkComponent } from './work/work.component';
import { TimelineComponent } from './work/timeline/timeline.component';
import { IrComponent } from './work/ir/ir.component';

import { DealerspanComponent } from './work/dealerspan/dealerspan.component';
import { DsOverviewComponent } from './work/dealerspan/ds-overview/ds-overview.component';
import { DsVidComponent } from './work/dealerspan/ds-vid/ds-vid.component';

import { DellComponent } from './work/dell/dell.component';
import { IndividualComponent } from './work/individual/individual.component';
import { SofiComponent } from './work/sofi/sofi.component';
import { KineticComponent } from './work/kinetic/kinetic.component';
import { KOAComponent } from './work/koa/koa.component';
import { OverviewComponent } from './work/kinetic/overview/overview.component';
import { KineticExamplesComponent } from './work/kinetic/kinetic-examples/kinetic-examples.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'work',
    component: WorkComponent,
	  children: [
      { path: '', 					redirectTo: 'work/ir', pathMatch: 'full' },
      { path: 'ir', 				component: IrComponent },
      { path: 'dealerspan', component: DealerspanComponent,
	      children: [
		      { path: '', 				component: DsOverviewComponent },
		      { path: 'overview', component: DsOverviewComponent },
		      { path: 'ds-vid', 	component: DsVidComponent }
	      ] 
	      
      },
      { path: 'individual', component: IndividualComponent },
      { path: 'dell', 			component: DellComponent },
      { path: 'sofi', 			component: SofiComponent },
      
      { path: 'kinetic', 		component: KineticComponent,
	      children: [
		      { path: '', 					component: OverviewComponent },
		    	{ path: 'overview', 	component: OverviewComponent },
		    	{ path: 'kinetic-examples', 	component: KineticExamplesComponent }
	    	]
      },
      
      { path: 'timeline', 	component: TimelineComponent },
      { path: 'koa', 				component: KOAComponent }
      
    ]
  },
  {
	  path: 'timeline',
	  component: TimelineComponent
  },
  {
    path: '**',
    component: HomeComponent
  }

]

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);