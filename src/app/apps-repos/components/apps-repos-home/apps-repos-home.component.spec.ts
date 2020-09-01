import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsReposHomeComponent } from './apps-repos-home.component';

describe('AppsReposHomeComponent', () => {
  let component: AppsReposHomeComponent;
  let fixture: ComponentFixture<AppsReposHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsReposHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsReposHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
