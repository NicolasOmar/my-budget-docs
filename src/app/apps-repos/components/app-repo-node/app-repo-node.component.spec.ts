import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRepoNodeComponent } from './app-repo-node.component';

describe('AppRepoNodeComponent', () => {
  let component: AppRepoNodeComponent;
  let fixture: ComponentFixture<AppRepoNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRepoNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRepoNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
