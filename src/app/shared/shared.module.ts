import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SHARED_COMPONENTS } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [CommonModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  exports: [
    SHARED_COMPONENTS,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
