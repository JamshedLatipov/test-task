import { Injectable } from '@angular/core';
import { StorageService } from './strorage.service';
import { ICard } from '../interfaces/card.interface';
import { BehaviorSubject } from 'rxjs';
import { uuid } from '../utils/uuid.util';

@Injectable({ providedIn: 'root' })
export class CardService {
  private readonly STORAGE_KEY = 'card-list';

  cards: BehaviorSubject<ICard[]>;

  constructor(private readonly _storageService: StorageService) {
    const data = this._storageService.get(this.STORAGE_KEY);
    this.cards = new BehaviorSubject(data || []);
  }

  findById(id: string): ICard {
    const data = this._getFormStorage();
    return data.find(card => card.id === id);
  }

  edit(card: ICard): boolean {
    const data = this._getFormStorage();
    const findedCartIndex = data.findIndex(_card => _card.id === card.id);

    if (findedCartIndex > -1) {
      data[findedCartIndex] = card;
      this._publish(data);
      return true;
    }

    return false;
  }

  create(card: ICard): void {
    const data = this._getFormStorage();
    const newCard: ICard = {
      id: uuid(),
      liked: false,
      ...card,
    };

    data.push(newCard);
    this._publish(data);
  }

  delete(card: ICard) {
    let data = this._getFormStorage();
    data = data.filter(_card => _card.id !== card.id);
    this._publish(data);
  }

  private _getFormStorage(): ICard[] {
    return this._storageService.get(this.STORAGE_KEY) || [];
  }

  private _publish(data: ICard[]): void {
    this._storageService.set(this.STORAGE_KEY, data);
    this.cards.next(data);
  }
}
