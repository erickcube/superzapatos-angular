import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

let authorizationData = 'Basic ' + btoa('my_user' + ':' + 'my_password');

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': authorizationData
    })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleUrl = 'http://superzapatos.tk/services/articles/';

  constructor(
    private http: HttpClient
  ) { }

  /**
  * Gets all articles from the server
    */
  getArticles(): Observable<any> {
    return this.http.get<any>(this.articleUrl,httpOptions)
    .pipe(
      catchError(this.handleError<any>('getArticles', []))
    );
  }

  /**
  * Deletes article from the server
    */
  deleteArticle(id: number): Observable<any> {
    const url = `${this.articleUrl}${id}`;

    return this.http.delete<any>(url,httpOptions)
    .pipe(
      catchError(this.handleError<any>('deleteArticle'))
    );
  }

  /**
  * Gets article from the server
    */
  getArticle(id: number): Observable<any> {
    const url = `${this.articleUrl}${id}`;
    return this.http.get<any>(url,httpOptions).pipe(
      catchError(this.handleError<any>(`getArticle id=${id}`))
    );
  }

  /**
  * Updates article on the server
   */
  updateArticle (article: any): Observable<any> {
    return this.http.patch(`${this.articleUrl}${article.id}`, article, httpOptions).pipe(
      catchError(this.handleError<any>('updateArticle'))
    );
  }

  /**
  * Adds a new article to the server
   */
  addArticle (article: any): Observable<any> {
    return this.http.post<any>(this.articleUrl, article, httpOptions).pipe(
      catchError(this.handleError<any>('addArticle'))
    );
  }

  /**
  * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
