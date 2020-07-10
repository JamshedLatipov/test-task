import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { ICard } from 'src/app/interfaces/card.interface';
import { Observable } from 'rxjs';
import { uuid } from 'src/app/utils/uuid.util';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent implements OnInit {
  constructor(private readonly _cardService: CardService) {}

  ngOnInit() {}

  get list(): Observable<ICard[]> {
    return this._cardService.cards;
  }

  addCard() {
    this._cardService.create({
      id: uuid(),
      description: 'sad',
      liked: false,
      title: 'sad',
    });
  }

  editCard(card: ICard) {
    this._cardService.edit(card);
  }
}
