import { Component } from '@angular/core';
import { RegisterRequest } from '../../services/models';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../../services/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {email: '', firstname: '', lastname: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ){
    
  }
  login() {
    this.router.navigate(['login'])
  }
  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['login'])
      },
      error: (err) => {
        this.errorMsg = err.error.validationErrors;
      }
    })
  }
}
