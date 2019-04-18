import { Component, OnInit } from '@angular/core';
import { GauthenticationService } from '../../services/gauthentication.service';


@Component({
  selector: 'app-glogin',
  templateUrl: './glogin.component.html',
  styleUrls: ['./glogin.component.css']
})

export class GloginComponent implements OnInit {

user;

 constructor(private auth: GauthenticationService) {
    this.user = auth.authInfo;
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }


}
