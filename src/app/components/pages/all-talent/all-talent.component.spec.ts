import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTalentComponent } from './all-talent.component';

describe('AllTalentComponent', () => {
  let component: AllTalentComponent;
  let fixture: ComponentFixture<AllTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTalentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
