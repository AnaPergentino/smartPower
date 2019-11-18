import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarTomadasComponent } from './controlar-tomadas.component';

describe('ControlarTomadasComponent', () => {
  let component: ControlarTomadasComponent;
  let fixture: ComponentFixture<ControlarTomadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlarTomadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlarTomadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
