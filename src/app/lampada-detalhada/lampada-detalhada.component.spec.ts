import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampadaDetalhadaComponent } from './lampada-detalhada.component';

describe('LampadaDetalhadaComponent', () => {
  let component: LampadaDetalhadaComponent;
  let fixture: ComponentFixture<LampadaDetalhadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampadaDetalhadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampadaDetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
