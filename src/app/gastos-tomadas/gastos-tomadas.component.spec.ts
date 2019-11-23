import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosTomadasComponent } from './gastos-tomadas.component';

describe('GastosTomadasComponent', () => {
  let component: GastosTomadasComponent;
  let fixture: ComponentFixture<GastosTomadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosTomadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosTomadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
