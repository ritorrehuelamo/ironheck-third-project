import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Local Maket';
  user: object;

  constructor(
    public auth: AuthService,
    private titleService: Title
  ) {
    this.setTitle(this.title);
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user = user );
  }

  logout() {
    this.auth.logout()
      .subscribe();
  }

  public setTitle(newTitle) {
    this.titleService.setTitle(newTitle);
  }

}
