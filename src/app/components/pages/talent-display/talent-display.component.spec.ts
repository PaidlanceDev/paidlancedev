import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentDisplayComponent } from './talent-display.component';

describe('TalentDisplayComponent', () => {
  let component: TalentDisplayComponent;
  let fixture: ComponentFixture<TalentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
