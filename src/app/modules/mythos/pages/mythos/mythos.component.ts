import { Component, OnInit } from '@angular/core';
import { ComicsDTO } from '../../../../services/models/ComicsDTO ';
import { Router } from '@angular/router';
import { InfoControllerService } from '../../../../services/services';

@Component({
  selector: 'app-mythos',
  templateUrl: './mythos.component.html',
  styleUrl: './mythos.component.scss'
})
export class MythosComponent implements OnInit{
  mythosResponse: ComicsDTO[] = [];
  totalRecords: number = 700; // Assumindo que você sabe o total de registros
  itemsPerPage: number = 10;
  currentPage: number = 0;

  constructor(
    private router: Router,
    private hello: InfoControllerService
  ){
    
  }
  ngOnInit(): void {
    this.geAllMythos(this.currentPage, this.itemsPerPage);
  }

  private geAllMythos(page: number, size: number){
    this.hello.getAllPaginated(page, size).subscribe(
      (response: ComicsDTO[]) => {
        console.log(response);
        this.mythosResponse = response;
      },
      error => {
        console.error('Erro ao carregar os quadrinhos:', error);
      }
    )
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.itemsPerPage = event.rows;
    this.geAllMythos(this.currentPage, this.itemsPerPage);
  }
}
