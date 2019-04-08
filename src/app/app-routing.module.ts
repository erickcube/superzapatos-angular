import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent }      from './stores/stores.component';
import { StoreDetailComponent }      from './store-detail/store-detail.component';
import { StoreCreateComponent }      from './store-create/store-create.component';
import { ArticlesComponent }      from './articles/articles.component';
import { ArticleDetailComponent }      from './article-detail/article-detail.component';
import { ArticleCreateComponent }      from './article-create/article-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/stores', pathMatch: 'full' },
  { path: 'stores', component: StoresComponent },
  { path: 'stores/create', component: StoreCreateComponent },
  { path: 'stores/:id', component: StoreDetailComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/create', component: ArticleCreateComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
