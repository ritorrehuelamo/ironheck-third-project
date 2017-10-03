import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class IsLoggedInService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.getUser() ? true : false;
  }
}
