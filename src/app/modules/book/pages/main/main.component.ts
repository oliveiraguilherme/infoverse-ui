import { Component, OnInit } from '@angular/core';
import { InfoControllerService } from '../../../../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  helloResponse: string | undefined;

  constructor(
    private router: Router,
    private hello: InfoControllerService
  ){
    
  }
  ngOnInit(): void {
    this.getHello();
  }

  private getHello(){
    this.hello.getHello().subscribe({
      next: (helloRes) => {
        console.log(helloRes)
        this.helloResponse = helloRes;
      }
    })
  }

}
