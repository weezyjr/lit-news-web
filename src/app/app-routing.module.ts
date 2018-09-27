import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SingleNewsComponent } from './news/single-news/single-news.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
    children: [{
      path: '',
      component: SingleNewsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
