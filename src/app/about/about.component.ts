import { 
	Component, 
	OnInit,
	Input,
	trigger} from '@angular/core';
import { Animations } from '../page-animate';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  host: {
	 '[@routeAnimation]': 'true',
   '[style.display]': "'block'",
   '[style.position]': "'absolute'",
   '[style.left]' : "'0'",
   '[style.right]' : "'0'"
  },
  
  animations: Animations.page

})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
}

}
