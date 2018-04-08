import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseCheckComponent } from './warehouse-check.component';

describe('WarehouseCheckComponent', () => {
  let component: WarehouseCheckComponent;
  let fixture: ComponentFixture<WarehouseCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
