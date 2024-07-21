import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator'
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar'; // Adicione esta linha




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    PanelModule,
    PaginatorModule,
    CardModule,
    MenubarModule,
    AvatarModule 
  ]
})
export class BookModule { }
