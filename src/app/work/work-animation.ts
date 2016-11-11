import {style, animate, transition, state, trigger} from '@angular/core';


export class WorkAnimations {
  static page = [

		trigger('routeAnimation', [
						
			transition('void => *', [
	      style({transform: 'translateX(-100%)'}),
	      animate(200)
	    ]),
	    transition('* => void', [
				animate(200, style({ transform: 'translateX(100%)'}))
			])
	
		])
		
	];
	
}