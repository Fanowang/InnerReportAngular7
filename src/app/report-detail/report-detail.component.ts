import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Report } from '../report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
  @Input() report: Report;
  constructor(private route: ActivatedRoute,
    private reportService: ReportService,
    private location: Location) { }

  ngOnInit() {
    this.getReport();
  }
  getReport(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reportService.getReport(id)
      .subscribe(report => {
        console.log(report.from);
        //report.from = new Date(Date.UTC(report.from.getFullYear(), report.from.getMonth(), report.from.getDate()));
        this.report = report
      });

  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.reportService.updateReport(this.report)
      .subscribe(() => {
        //console.log(this.report.from);
        this.goBack()
      });
  }

}
