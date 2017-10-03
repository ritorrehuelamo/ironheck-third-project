import { IsLoggedInService } from './services/is-logged-in.service';
import { LoginformComponent } from './loginform/loginform.component';
import { Routes } from '@angular/router';

export const routes: Routes =  [
  { path: '' },
  { path: 'login', component: LoginformComponent,
    canActivate: [IsLoggedInService]},
  { path: '**', redirectTo: ''}
];
