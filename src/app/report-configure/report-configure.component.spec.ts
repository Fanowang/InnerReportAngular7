import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportConfigureComponent } from './report-configure.component';

describe('ReportConfigureComponent', () => {
  let component: ReportConfigureComponent;
  let fixture: ComponentFixture<ReportConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
