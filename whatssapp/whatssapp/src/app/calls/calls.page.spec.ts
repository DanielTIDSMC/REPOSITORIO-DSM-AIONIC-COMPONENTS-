import { ComponentFixture, TestBed } from '@angular/core/testing';
import { callsPage } from './calls.page';

describe('CallsPage', () => {
  let component: callsPage;
  let fixture: ComponentFixture<callsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(callsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
