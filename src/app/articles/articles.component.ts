import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  result = <any>{};

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getArticles();
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

}
