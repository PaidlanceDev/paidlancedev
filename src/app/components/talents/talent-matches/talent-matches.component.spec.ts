import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentMatchesComponent } from './talent-matches.component';

describe('TalentMatchesComponent', () => {
  let component: TalentMatchesComponent;
  let fixture: ComponentFixture<TalentMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentMatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
