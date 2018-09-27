import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider } from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('home');
  }

  loginWithFacebook() {
   let socialPlatformProvider;
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(' sign in data : ', userData);
        // Now sign-in with userData
        // ...
        this.router.navigateByUrl('home');
      }
    );
  }

}
