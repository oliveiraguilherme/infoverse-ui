import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MainComponent } from './modules/book/pages/main/main.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: MainComponent },
    { path: 'mythos', loadChildren: () => import('./modules/mythos/mythos.module').then(m => m.MythosModule) },
  ]},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }