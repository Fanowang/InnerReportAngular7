import { Component, OnInit } from '@angular/core';
import { Report } from '../report';
import { ReportService } from '../report.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ReportConfigureComponent} from '../report-configure/report-configure.component';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  reports: Report[];
  fieldValue = '';

  constructor(private reportService: ReportService
    ,private _formBuilder: FormBuilder
    ,public dialog: MatDialog) { }

    openDialog(): void {
      const dialogRef = this.dialog.open(ReportConfigureComponent, {
        width: '1000px'
        
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.getReports();
      });
    }
  ngOnInit() {
    this.getReports();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  getReports(): void {
    this.reportService.getReports()
      .subscribe(reports => this.reports = reports);
  }
  add(name: string, from: Date, to: Date): void {
    name = name.trim();
    if (!name) { return; }
    this.reportService.addReport({ name, from, to } as Report)
      .subscribe(report => {
        this.reports.push(report);
      });
  }
  delete(report: Report): void {
    this.reports = this.reports.filter(h => h !== report);
    this.reportService.deleteReport(report).subscribe();
  }
}
