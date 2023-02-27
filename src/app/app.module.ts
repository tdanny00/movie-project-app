import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NavBarComponent } from './components/modules/nav-bar/nav-bar.component';
import { SidemenuComponent } from './components/modules/sidemenu/sidemenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/modules/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './components/services/loader.service';
import { LoaderInterceptor } from './components/services/loader-interceptor.service';
import { SearchBarComponent } from './components/modules/search-bar/search-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './components/modules/banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NavBarComponent,
    SidemenuComponent,
    LoaderComponent,
    SearchBarComponent,
    BannerComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyD0AUXpyN5v39lv3dTm5Gny5y5OgU6O9hw',
      authDomain: 'movie-mate-80e7c.firebaseapp.com',
      projectId: 'movie-mate-80e7c',
      storageBucket: 'movie-mate-80e7c.appspot.com',
      messagingSenderId: '1019419768459',
      appId: '1:1019419768459:web:e5ed60d439fe24e44ec68e',
      measurementId: 'G-2SHLGCWC1Z',
    }),
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
