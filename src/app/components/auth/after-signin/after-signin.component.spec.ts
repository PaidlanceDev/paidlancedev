import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSigninComponent } from './after-signin.component';

describe('AfterSigninComponent', () => {
  let component: AfterSigninComponent;
  let fixture: ComponentFixture<AfterSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterSigninComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
