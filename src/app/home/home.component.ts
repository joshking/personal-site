import { 
	Component, 
	OnInit,
	Input,
	trigger } from '@angular/core';
import {Animations} from '../page-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {
	 '[@routeAnimation]': 'true',
   '[style.display]': "'block'",
   '[style.position]': "'absolute'",
   '[style.left]' : "'0'",
   '[style.right]' : "'0'",
   '[style.top]' : "'0'",
   '[style.bottom]' : "'0'",
   '[style.background]' : "'#ccc'"
  },
  animations: Animations.page

})
export class HomeComponent implements OnInit {
	
	constructor() {}

	ngOnInit() {}

}