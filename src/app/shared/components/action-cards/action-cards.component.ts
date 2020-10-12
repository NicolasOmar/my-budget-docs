import { Component, Input, OnInit } from '@angular/core';
// INTERFACES
import { Menu } from '@shared/interfaces/sidebar.interfaces';
// ENUMS
import { StylesEnum } from '@shared/enums/stylesEnum';

@Component({
  selector: 'doc-action-cards',
  templateUrl: './action-cards.component.html',
  styleUrls: ['./action-cards.component.scss']
})
export class ActionCardsComponent implements OnInit {
  @Input() cards: Array<Menu>;
  public cardsHeaderClass: string;

  ngOnInit(): void {
    this.cardsHeaderClass = `ui ${StylesEnum[this.cards.length]} cards`;
  }
}
