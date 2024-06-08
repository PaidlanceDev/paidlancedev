import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FqaComponent } from './fqa.component';

describe('FqaComponent', () => {
  let component: FqaComponent;
  let fixture: ComponentFixture<FqaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FqaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
