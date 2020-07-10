import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListRoutingModule } from './card-list-routing.module';
import { CardListComponent } from './pages/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CardListComponent, CardComponent],
  imports: [CommonModule, CardListRoutingModule, SharedModule],
})
export class CardListModule {}
