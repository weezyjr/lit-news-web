import {
  Injectable
} from '@angular/core';
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class NewsService {
  private HEADERS = {
    'Accept': 'application/json',
    'X-Api-Key': '3f79c5021cad489eb25a8b050cf36a4f'
  };

  private REQUEST_OPTIONS = {
    headers: new HttpHeaders(this.HEADERS),
  };

  private currentArticle: Subject<object> = new Subject;
  private articles: Array<Object>;

  constructor(private http: HttpClient) { }

  getNews(cat) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?category=${cat}`, this.REQUEST_OPTIONS);
  }

  setArticles(articles) {
    this.articles = articles;
  }

  setCurrentArticle(article) {
    this.currentArticle.next(article);
  }

  getArticles() {
    return this.articles;
  }

  getCurrentArticle() {
    return this.currentArticle;
  }
}
