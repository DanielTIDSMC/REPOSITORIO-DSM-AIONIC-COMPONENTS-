import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegradoraPage } from './integradora.page';

describe('IntegradoraPage', () => {
  let component: IntegradoraPage;
  let fixture: ComponentFixture<IntegradoraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegradoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
