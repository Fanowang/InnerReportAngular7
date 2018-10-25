import { Injectable } from '@angular/core';
import { Report } from './report';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReportService {


  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.reportsUrl)
      .pipe(
        tap(reports => this.log('fetched reports')),
        catchError(this.handleError('getReports', []))
      );
  }
  getReport(id: number): Observable<Report> {
    const url = `${this.reportsUrl}/${id}`;
    return this.http.get<Report>(url).pipe(
      tap(_ => this.log(`fetched report id=${id}`)),
      catchError(this.handleError<Report>(`getReport id=${id}`))
    );
  }
  /** PUT: update the report on the server */
  updateReport(report: Report): Observable<any> {
    return this.http.put(this.reportsUrl, report, httpOptions).pipe(
      tap(_ => this.log(`updated report id=${report.id}`)),
      catchError(this.handleError<any>('updateReport'))
    );
  }

  /** POST: add a new report to the server */
  addReport(report: Report): Observable<Report> {
    return this.http.post<Report>(this.reportsUrl, report, httpOptions).pipe(
      tap((report: Report) => this.log(`added report w/ id=${report.id}`)),
      catchError(this.handleError<Report>('addReport'))
    );
  }
  /** DELETE: delete the report from the server */
  deleteReport(report: Report | number): Observable<Report> {
    const id = typeof report === 'number' ? report : report.id;
    const url = `${this.reportsUrl}/${id}`;

    return this.http.delete<Report>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted report id=${id}`)),
      catchError(this.handleError<Report>('deleteReport'))
    );
  }

  /* GET reports whose name contains search term */
  searchReports(term: string): Observable<Report[]> {
    if (!term.trim()) {
      // if not search term, return empty report array.
      return of([]);
    }
    return this.http.get<Report[]>(`${this.reportsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found reports matching "${term}"`)),
      catchError(this.handleError<Report[]>('searchReports', []))
    );
  }
  constructor(private http: HttpClient, private messageService: MessageService) { }
  /** Log a ReportService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ReportService: ${message}`);
  }

  private reportsUrl = 'api/reports';
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
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
