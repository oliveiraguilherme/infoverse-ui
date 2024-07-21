import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MythosComponent } from './pages/mythos/mythos.component';

export const routes: Routes = [
  { path: '', component: MythosComponent }
  // adicione outras rotas conforme necessário
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MythosRoutingModule { }
