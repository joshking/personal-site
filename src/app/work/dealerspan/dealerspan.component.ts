import { Component, OnInit } from '@angular/core';
import { WorkAnimations } from '../work-animation';

@Component({
  selector: 'app-dealerspan',
  templateUrl: './dealerspan.component.html',
  host: {
	 '[@routeAnimation]': 'true',
   '[style.display]': "'block'",
   '[style.position]': "'absolute'",
   '[style.left]' : "'0'",
   '[style.right]' : "'0'"
  },
  animations: WorkAnimations.page
})
export class DealerspanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
