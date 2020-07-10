import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { ICard } from 'src/app/interfaces/card.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements OnInit {
  card: ICard;

  constructor(
    private readonly _cardService: CardService,
    private readonly _activatedRouter: ActivatedRoute,
    private readonly _router: Router
  ) {}

  ngOnInit() {
    const { id } = this._activatedRouter.snapshot.params;
    this.card = this._cardService.findById(id);
  }

  delete(card: ICard): void {
    console.log(card);
    this._cardService.delete(card);
    this._router.navigate(['/']);
  }

  edit(card: ICard): void {
    this._cardService.edit(card);
    this._router.navigate(['/']);
  }
}
