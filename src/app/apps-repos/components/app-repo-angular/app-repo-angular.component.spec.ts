import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRepoAngularComponent } from './app-repo-angular.component';

describe('AppRepoAngularComponent', () => {
  let component: AppRepoAngularComponent;
  let fixture: ComponentFixture<AppRepoAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRepoAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRepoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
