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
export class StoreService {

  private storeUrl = 'http://superzapatos.tk/services/stores/';

  constructor(
    private http: HttpClient
  ) { }

  /**
  * Gets all stores from the server
    */
  getStores(): Observable<any> {
    return this.http.get<any>(this.storeUrl,httpOptions)
    .pipe(
      tap(_ => this.log('fetched stores')),
      catchError(this.handleError<any>('getStores', []))
    );
  }

  /**
  * Deletes store from the server
    */
  deleteStore (id): Observable<any> {
    const url = `${this.storeUrl}${id}`;

    return this.http.delete<any>(url,httpOptions)
    .pipe(
      tap(_ => this.log(`deleted store id=${id}`)),
      catchError(this.handleError<any>('deleteStore'))
    );
  }

  getStore(id: number): Observable<any> {
    const url = `${this.storeUrl}${id}`;
    return this.http.get<any>(url,httpOptions).pipe(
      tap(_ => this.log(`fetched store id=${id}`)),
      catchError(this.handleError<any>(`getStore id=${id}`))
    );
  }

  getStoreArticles(id: number): Observable<any> {
    const url = `http://superzapatos.tk/services/articles/stores/${id}`;
    return this.http.get<any>(url,httpOptions).pipe(
      tap(_ => this.log(`fetched storeArticles id=${id}`)),
      catchError(this.handleError<any>(`getStoreArticles id=${id}`))
    );
  }

  /**
  * Updates store on the server
   */
  updateStore (store: any): Observable<any> {
    return this.http.patch(`${this.storeUrl}${store.id}`, store, httpOptions).pipe(
      tap(_ => this.log(`updated store id=${store.id}`)),
      catchError(this.handleError<any>('updateStore'))
    );
  }

  /**
  * Adds a new store to the server
   */
  addStore (store: any): Observable<any> {
    return this.http.post<any>(this.storeUrl, store, httpOptions).pipe(
      tap(_ => this.log('addded store')),
      catchError(this.handleError<any>('addStore'))
    );
  }

  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
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

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
