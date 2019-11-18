import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarLampadasComponent } from './controlar-lampadas.component';

describe('ControlarLampadasComponent', () => {
  let component: ControlarLampadasComponent;
  let fixture: ComponentFixture<ControlarLampadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlarLampadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlarLampadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
