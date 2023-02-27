import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    if (this.email == '') {
      alert('Please enter email');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    this.authService.userLogin(this.email, this.password);

    this.email = '';
    this.password = '';
  }

  signInWithGoogle() {
    this.authService.userGoogleSignIn();
  }
}
