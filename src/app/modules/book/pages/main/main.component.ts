import { Component, OnInit } from '@angular/core';
import { InfoControllerService } from '../../../../services/services';
import { Router } from '@angular/router';
import { ComicsDTO } from '../../../../services/models/ComicsDTO ';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  helloResponse: ComicsDTO[] = [];
  totalRecords: number = 700; // Assumindo que você sabe o total de registros
  itemsPerPage: number = 10;
  currentPage: number = 0;
  items: MenuItem[] | undefined;

  constructor(
    private router: Router,
    private hello: InfoControllerService,
    
  ){
    
  }
  ngOnInit(): void {
    //this.getHello(this.currentPage, this.itemsPerPage);
    this.items = [
      {
        label: 'File',
        items: [
          {label: 'New', icon: 'pi pi-fw pi-plus', command: () => {this.navigateTo('/new');}},
          {label: 'Open', icon: 'pi pi-fw pi-folder-open', command: () => {this.navigateTo('/open');}},
          {separator: true},
          {label: 'Quit', icon: 'pi pi-fw pi-power-off'}
        ]
      },
      {
        label: 'Edit',
        items: [
          {label: 'Undo', icon: 'pi pi-fw pi-undo'},
          {label: 'Redo', icon: 'pi pi-fw pi-repeat'}
        ]
      }
    ];
  }

  private getHello(page: number, size: number){
    this.hello.getAllPaginated(page, size).subscribe(
      (response: ComicsDTO[]) => {
        console.log(response);
        this.helloResponse = response;
      },
      error => {
        console.error('Erro ao carregar os quadrinhos:', error);
      }
    )
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.itemsPerPage = event.rows;
    this.getHello(this.currentPage, this.itemsPerPage);
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

}
