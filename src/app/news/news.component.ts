import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  public cat: String;
  public currentArticle: Object;
  public query: String;
  public articles: Array<Object>;
  constructor(
    public newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService) {

    // get category name from nav params
    this.cat = this.activatedRoute.snapshot.paramMap.get('cat');

    // get news of this category
    this.newsService.getNews(this.cat).subscribe((res) => {

      // save the articles
      this.articles = res['articles'];
      this.newsService.setArticles(this.articles);

      // show first article
      this.currentArticle = this.articles[0];
      this.newsService.setCurrentArticle(this.currentArticle);

      // hide loader
      this.spinner.hide();
    });

  }

  goToSingleNews(article) {
    this.currentArticle = article;
    this.newsService.setCurrentArticle(this.currentArticle);
  }

  search() {
    // set the articles back to the unfiltered articles saved in the service
    this.articles = this.newsService.getArticles();

    // if the value is an empty string don't filter the items
    if (this.query && this.query.trim() !== '') {
      this.articles = this.articles.filter((article) => {
        // filter using the title, source or description
        if (article['title']) {
          return (article['title'].toLowerCase().indexOf(this.query.toLowerCase()) > -1);
        }
      });
    }
  }

  ngOnInit() {
      /** spinner starts on init */
      this.spinner.show();
  }

}
