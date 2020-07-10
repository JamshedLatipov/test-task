import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/card-list/card-list.module').then(
        m => m.CardListModule
      ),
  },
  {
    path: 'info/:id',
    loadChildren: () =>
      import('./modules/info/info.module').then(m => m.InfoModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./modules/create/create.module').then(m => m.CreateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
