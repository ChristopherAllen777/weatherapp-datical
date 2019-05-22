import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather App';
  description = 'Pick two cites from the dropdowns and see which city has the better weather :)';
  description2 = 'Start with filling out each drop down.';
  description3 = 'Then find their weather.';
}
