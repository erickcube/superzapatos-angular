import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  rStore = <any>{};

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private storeService: StoreService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStores();
  }

  add(name: string, description: string, price: number, total_in_shelf: number, total_in_vault: number, store_id: number): void {
    if (!name && !description && !price && !total_in_shelf && !total_in_vault && !store_id) { return; }
    this.articleService.addArticle({
      'name':name,
      'description': description ,
      'price': price ,
      'total_in_shelf': total_in_shelf ,
      'total_in_vault': total_in_vault,
      'store_id': store_id })
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getStores() {
    this.storeService.getStores().subscribe((data: {}) => {
      console.log(data);
      this.rStore = data;
    });
  }

}
