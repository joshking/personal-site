import { 
	Component, 
	OnInit,
	Input,
	trigger } from '@angular/core';
import {Animations} from '../page-animate'
	

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  host: {
	 '[@routeAnimation]': 'true',
   '[style.display]': "'block'",
   '[style.position]': "'absolute'",
   '[style.left]' : "'0'",
   '[style.right]' : "'0'"
  },
  animations: Animations.page
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
