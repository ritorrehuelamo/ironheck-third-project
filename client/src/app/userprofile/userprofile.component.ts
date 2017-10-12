import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  title: String = 'Local Market - User Profile';
  user: object;

  constructor(
    public auth: AuthService,
    private appCom: AppComponent
  ) {
    this.appCom.setTitle(this.title);
    this.auth.isLoggedIn()
        .subscribe( user => this.user = user );
  }

  ngOnInit() {
  }

}
