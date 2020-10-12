import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRepoBaseComponent } from './app-repo-base.component';

describe('AppRepoBaseComponent', () => {
  let component: AppRepoBaseComponent;
  let fixture: ComponentFixture<AppRepoBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRepoBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRepoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
