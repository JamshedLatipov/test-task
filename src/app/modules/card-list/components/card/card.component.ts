import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  card: ICard;

  @Output()
  favoriteChange: EventEmitter<ICard> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  get favorite(): string {
    return this.card.liked ? 'favorite' : 'favorite_border';
  }

  toggleFavorite() {
    this.favoriteChange.emit({ ...this.card, liked: !this.card.liked });
  }
}
