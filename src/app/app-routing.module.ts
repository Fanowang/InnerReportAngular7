import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { ReportConfigureComponent } from './report-configure/report-configure.component';

const routes: Routes = [
  { path: 'reports', component: ReportsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: ReportDetailComponent },
  { path: 'reportconfigure', component: ReportConfigureComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
