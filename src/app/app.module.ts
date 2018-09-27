import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SingleNewsComponent } from './news/single-news/single-news.component';
import { HttpClientModule } from '@angular/common/http';

import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from 'angular-6-social-login';


// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('542879412810657')
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    SingleNewsComponent
  ],
  imports: [
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
