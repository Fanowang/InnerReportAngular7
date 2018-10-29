import { Component, OnInit } from '@angular/core';
import { Report } from '../report';
import { ReportService } from '../report.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-report-configure',
  templateUrl: './report-configure.component.html',
  styleUrls: ['./report-configure.component.css']
})
export class ReportConfigureComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  reports: Report[];
  fieldValue = '';
  report = { name: '', from: null, to: null };
  
  constructor(private reportService: ReportService
    , private _formBuilder: FormBuilder
    ,public dialogRef: MatDialogRef<ReportConfigureComponent>) { }

  ngOnInit() {
    this.getReports();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  /* add(name: string, from: Date, to: Date): void {
    name = name.trim();
    
    if (!name) { return; }
    this.reportService.addReport({ name, from, to } as Report)
      .subscribe(report => {
        console.log(report);
        this.reports.push(report);
        this.dialogRef.close();
      });
  } */
  add(report:Report): void {
    report.name = report.name.trim();    
    if (!report.name) { return; }
    this.reportService.addReport(report)
      .subscribe(report => {
        console.log(report);
        this.reports.push(report);
        this.dialogRef.close();
      });
  }
  getReports(): void {
    this.reportService.getReports()
      .subscribe(reports => this.reports = reports);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
