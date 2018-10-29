import { Component, OnInit } from '@angular/core';
import { Report } from '../report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reports: Report[];
  
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.getReports();
  }

  getReports(): void {
    this.reportService.getReports()
      .subscribe(reports => this.reports = reports.slice(reports.length-4, reports.length));
  }

}
