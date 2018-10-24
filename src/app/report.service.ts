import { Injectable } from '@angular/core';
import { Report } from './report';
import { REPORTS } from './mock-reports';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  getReports(): Observable<Report[]> {
    this.messageService.add('ReportService: fetched reports');
    return of(REPORTS);
  }
  getReport(id: number): Observable<Report> {
    this.messageService.add('ReportService: fetched report id=' + id);
    return of(REPORTS.find(report => report.id === id));
  }
  constructor(private messageService: MessageService) { }
}
