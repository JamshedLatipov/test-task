import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ICard } from 'src/app/interfaces/card.interface';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent implements OnInit {
  constructor(
    private readonly _cardService: CardService,
    private readonly _router: Router
  ) {}

  ngOnInit() {}

  create(card: ICard): void {
    this._cardService.create(card);
    this._router.navigate(['/']);
  }
}
