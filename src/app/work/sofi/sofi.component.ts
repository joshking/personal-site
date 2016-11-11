import { Component, OnInit } from '@angular/core';
import { WorkAnimations } from '../work-animation';

@Component({
  selector: 'app-sofi',
  templateUrl: './sofi.component.html',
  host: {
	 '[@routeAnimation]': 'true',
   '[style.display]': "'block'",
   '[style.position]': "'absolute'",
   '[style.left]' : "'0'",
   '[style.right]' : "'0'"
  },
  animations: WorkAnimations.page
})
export class SofiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
