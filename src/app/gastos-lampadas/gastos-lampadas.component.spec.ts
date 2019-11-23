import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosLampadasComponent } from './gastos-lampadas.component';

describe('GastosLampadasComponent', () => {
  let component: GastosLampadasComponent;
  let fixture: ComponentFixture<GastosLampadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosLampadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosLampadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
