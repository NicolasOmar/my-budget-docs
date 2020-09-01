import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolAnalysisComponent } from './tool-analysis.component';

describe('ToolAnalysisComponent', () => {
  let component: ToolAnalysisComponent;
  let fixture: ComponentFixture<ToolAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
