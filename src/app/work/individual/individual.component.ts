import { Component, OnInit } from '@angular/core';
import { WorkAnimations } from '../work-animation';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  host: {
	 '[@routeAnimation]': 'true',
   '[style.display]': "'block'",
   '[style.position]': "'absolute'",
   '[style.left]' : "'0'",
   '[style.right]' : "'0'"
  },
  animations: WorkAnimations.page
})
export class IndividualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
