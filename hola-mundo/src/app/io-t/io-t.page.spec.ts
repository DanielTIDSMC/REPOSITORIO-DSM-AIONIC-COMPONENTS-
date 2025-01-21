import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IoTPage } from './io-t.page';

describe('IoTPage', () => {
  let component: IoTPage;
  let fixture: ComponentFixture<IoTPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IoTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
