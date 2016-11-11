import { Component, OnInit } from '@angular/core';
import { Animations } from '../../page-animate'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  host: {
	 '[@routeAnimation]': 'true'
  },
  animations: Animations.page
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
