import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRepoReactComponent } from './app-repo-react.component';

describe('AppRepoReactComponent', () => {
  let component: AppRepoReactComponent;
  let fixture: ComponentFixture<AppRepoReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRepoReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRepoReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
