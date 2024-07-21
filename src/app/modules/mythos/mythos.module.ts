import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MythosRoutingModule } from './mythos-routing.module';
import { MythosComponent } from './pages/mythos/mythos.component';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [MythosComponent],
  imports: [
    CommonModule,
    MythosRoutingModule,
    PanelModule,
    PaginatorModule,
    CardModule
  ]
})
export class MythosModule { }
