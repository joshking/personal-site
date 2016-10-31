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
  selector: 'app-about',
  templateUrl: './about.component.html',
  host: {
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
					animate(100, style({transform: 'translateX(100%)'}))
				])
		
         
    ])
  ]

})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
}

}
