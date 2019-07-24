import { Component } from '@angular/core';
import { PathMatched } from './common/services/pathmatch.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private pathmatched: PathMatched){}
}
