import {style, animate, transition, state, trigger} from '@angular/core';


export class Animations {
  static page = [

		trigger('routeAnimation', [
			
			transition('void => *', [
	      style({opacity: 0}),
	      animate(500)
	    ]),
	    transition('* => void', [
				animate(300, style({ opacity: 1}))
			])
	
		])
		
	];
	
}
   