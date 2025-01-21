import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesarrolloPage } from './desarrollo.page';

describe('DesarrolloPage', () => {
  let component: DesarrolloPage;
  let fixture: ComponentFixture<DesarrolloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
