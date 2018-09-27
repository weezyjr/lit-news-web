import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public cats: Array<Object>;

  constructor(private router: Router) {
    this.cats = [
      {
        'title': 'Business',
        'img': '../../assets/imgs/Business.png'
      },
      {
        'title': 'Entertainment',
        'img': '../../assets/imgs/Entertainment.png'
      },
      {
        'title': 'General',
        'img': '../../assets/imgs/General.png'
      }, {
        'title': 'Health',
        'img': '../../assets/imgs/Health.png'
      }, {
        'title': 'Science',
        'img': '../../assets/imgs/Science.png'
      },
      {
        'title': 'Sports',
        'img': '../../assets/imgs/Sports.png'
      }, {
        'title': 'Technology',
        'img': '../../assets/imgs/Technology.png'
      }
    ];
  }

  ngOnInit() {
  }

  goToNews(cat) {
    this.router.navigate(['/news', { cat: cat }]);
  }

}
