import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentProjectsComponent } from './talent-projects.component';

describe('TalentProjectsComponent', () => {
  let component: TalentProjectsComponent;
  let fixture: ComponentFixture<TalentProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
