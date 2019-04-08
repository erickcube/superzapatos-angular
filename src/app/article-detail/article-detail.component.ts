import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  @Input() result = <any>{};
  rStore = <any>{};

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private storeService: StoreService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getArticle();
    this.getStores();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id).subscribe((data: {}) => {
      console.log(data);
      this.result = data;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
     this.articleService.updateArticle(this.result.article)
       .subscribe(() => this.goBack());
   }

   getStores() {
     this.storeService.getStores().subscribe((data: {}) => {
       console.log(data);
       this.rStore = data;
     });
   }

}
