import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user;
  editUser = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: 0,
    companyName: '',
    userType: ''
  };

  constructor(
    public auth: AuthService,
    private usrService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.isLoggedIn()
      .subscribe(user => {
        console.log(user.userType);
        this.editUser = {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          address: user.address,
          phoneNumber: user.phoneNumber,
          companyName: user.companyName,
          userType: user.userType
        };
      });
  }

  saveChanges() {
    this.usrService.editUser(this.user._id, this.editUser)
      .subscribe(() => {
        this.router.navigate(['/user']);
      });
  }

}
