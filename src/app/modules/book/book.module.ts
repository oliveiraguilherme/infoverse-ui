import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator'
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    PanelModule,
    PaginatorModule,
    CardModule
  ]
})
export class BookModule { }
