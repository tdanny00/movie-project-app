import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isScrolled = false;

  userPhotoUrl: string | null | undefined;
  userDisplayName: string | null | undefined;

  constructor(
    private authService: AuthService,
    private angularFireAuth: AngularFireAuth
  ) {}

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 80
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }
  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    if (this.angularFireAuth.user) {
      this.angularFireAuth.user.subscribe((user) => {
        this.userPhotoUrl = user?.photoURL;
        this.userDisplayName = user?.displayName;
      });
    }
  }
}
