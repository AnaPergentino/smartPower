import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarGastosComponent } from './controlar-gastos.component';

describe('ControlarGastosComponent', () => {
  let component: ControlarGastosComponent;
  let fixture: ComponentFixture<ControlarGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlarGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlarGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
