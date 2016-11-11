import { Component, OnInit } from '@angular/core';
import { WorkAnimations } from '../work-animation';

@Component({
  selector: 'app-dell',
  templateUrl: './dell.component.html',  
  host: {
	 '[@routeAnimation]': 'true',
   '[style.display]': "'block'",
   '[style.position]': "'absolute'",
   '[style.left]' : "'0'",
   '[style.right]' : "'0'"
  },
  animations: WorkAnimations.page
})
export class DellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
