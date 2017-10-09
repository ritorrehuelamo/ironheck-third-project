import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

interface EditUser {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user: object;
  editUser: EditUser = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    address: ''
  };
  constructor(public auth: AuthService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user = user );
  }

  ngOnInit() {
  }

}
