import { Component } from '@angular/core';
// CONSTATNS
import { WelcomeCards } from '@core/constants/data.const';

@Component({
  selector: 'doc-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public cards = WelcomeCards;
}
