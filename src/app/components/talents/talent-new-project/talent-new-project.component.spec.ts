import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentNewProjectComponent } from './talent-new-project.component';

describe('TalentNewProjectComponent', () => {
  let component: TalentNewProjectComponent;
  let fixture: ComponentFixture<TalentNewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentNewProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
