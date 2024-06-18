import { Component, OnInit } from '@angular/core';
import { InfoControllerService } from '../../../../services/services';
import { Router } from '@angular/router';
import { ComicsDTO } from '../../../../services/models/ComicsDTO ';

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

  constructor(
    private router: Router,
    private hello: InfoControllerService
  ){
    
  }
  ngOnInit(): void {
    this.getHello(this.currentPage, this.itemsPerPage);
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

}
