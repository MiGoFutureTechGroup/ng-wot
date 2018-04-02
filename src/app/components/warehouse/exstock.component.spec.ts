import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExstockComponent } from './exstock.component';

describe('ExstockComponent', () => {
  let component: ExstockComponent;
  let fixture: ComponentFixture<ExstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
