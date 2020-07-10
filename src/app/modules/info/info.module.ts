import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './pages/info/info.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [InfoComponent],
  imports: [CommonModule, InfoRoutingModule, SharedModule],
})
export class InfoModule {}
