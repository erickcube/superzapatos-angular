import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { StoreService } from '../store.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-articles-store',
  templateUrl: './articles-store.component.html',
  styleUrls: ['./articles-store.component.css']
})
export class ArticlesStoreComponent implements OnInit {

  result = <any>{};

  constructor(
    private articleService: ArticleService,
    private storeService: StoreService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStoreArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((data: {}) => {
      console.log(data);
      this.result = data;
    });
  }

  delete(article): void {
    this.result.articles = this.result.articles.filter(h => h !== article);
    this.articleService.deleteArticle(article.id).subscribe();
  }

  getStoreArticles(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storeService.getStoreArticles(id).subscribe((data: {}) => {
      console.log(data);
      this.result = data;
    });
  }

}
