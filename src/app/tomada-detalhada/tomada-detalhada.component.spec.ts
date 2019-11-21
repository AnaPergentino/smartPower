import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomadaDetalhadaComponent } from './tomada-detalhada.component';

describe('TomadaDetalhadaComponent', () => {
  let component: TomadaDetalhadaComponent;
  let fixture: ComponentFixture<TomadaDetalhadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomadaDetalhadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomadaDetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
