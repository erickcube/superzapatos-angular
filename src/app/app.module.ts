import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoresComponent } from './stores/stores.component';
import { ArticlesComponent } from './articles/articles.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { StoreCreateComponent } from './store-create/store-create.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    ArticlesComponent,
    StoreDetailComponent,
    StoreCreateComponent,
    ArticleDetailComponent,
    ArticleCreateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
