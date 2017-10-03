import { IsLoggedInService } from './is-logged-in.service';
import { environment } from './../../environments/environment';
import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs';
import { Observable } from 'rxjs/Observable';

const BASEURL = environment.BASEURL + '/api';

@Injectable()
export class AuthService {

  private user: object;
  private userLoginEvent: EventEmitter<any> = new EventEmitter<any>();
  private options = {withCredentials: true};
  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  public getLogginEventEmmiter(): EventEmitter<any> {
    return this.userLoginEvent;
  }

  public getUser() {
    return this.user;
  }

  private emitUserLoginEvent(user) {
    this.user = user;
    this.userLoginEvent.emit(user);
    return user;
  }

  private handlerError(e) {
    return Observable.throw(e.json().message);
  }

  signup(username, password) {
    return this.http.post(`${BASEURL}/signup`, {username, password}, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handlerError);
  }

  login(username, password) {
    return this.http.post(`${BASEURL}/login`, {username, password}, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handlerError);
  }

  logout() {
    return this.http.get(`${BASEURL}/logoug`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(null))
      .catch(this.handlerError);
  }

  isLoggedIn() {
    return this.http.get(`${BASEURL}/loggedin`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handlerError);
  }
}
