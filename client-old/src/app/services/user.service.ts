import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const BASEURL: string = environment.BASEURL + '/api/users';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  editUser(id, user) {
    return this.http.put(`${BASEURL}/${id}/edit`, user)
      .map(res => res.json());
  }
}
