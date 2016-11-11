import { 
	Component, 
	OnInit,
	Input,
	trigger
	 } from '@angular/core';
import { WorkAnimations } from '../work-animation';

@Component({
  selector: 'app-ir',
  templateUrl: './ir.component.html',
  host: {
	 '[@routeAnimation]': 'true',
   '[style.display]': "'block'",
   '[style.position]': "'absolute'",
   '[style.left]' : "'0'",
   '[style.right]' : "'0'"
  },
  
  animations: WorkAnimations.page
  
})

export class IrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
