import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.sass']
})
export class SingleNewsComponent implements OnInit {

  public article: any;
  constructor(private newsService: NewsService) {
    this.newsService.getCurrentArticle().subscribe(article =>
      this.article = article);
  }

  ngOnInit() {
  }

}
