import { 
	Component, 
	OnInit,
	Input,
	trigger,
	state,
	style,
	transition,
	animate } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  host: {
   '[@routeAnimation]': 'true',
   '[style.display]': "'block'",
   '[style.position]': "'absolute'",
   '[style.left]' : "'0'",
   '[style.right]' : "'0'"
  },
  animations: [
    trigger('routeAnimation', [
	    	
	    	state('*', style({transform: 'translateX(0)', opacity: 1})),
				
				transition('void => *', [
		      style({transform: 'translateX(-100%)'}),
		      animate(100)
		    ]),
				transition('* => void', [
					animate(100, style({opacity: 0, transform: 'translateX(100%)'}))
				])
				     
    ])
  ]

})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
