import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectsComponent } from './all-projects.component';

describe('AllProjectsComponent', () => {
  let component: AllProjectsComponent;
  let fixture: ComponentFixture<AllProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
