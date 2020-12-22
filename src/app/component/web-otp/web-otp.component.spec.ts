import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebOtpComponent } from './web-otp.component';

describe('WebOtpComponent', () => {
  let component: WebOtpComponent;
  let fixture: ComponentFixture<WebOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
