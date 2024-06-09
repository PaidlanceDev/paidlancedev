import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsListComponent } from './talents-list.component';

describe('TalentsListComponent', () => {
  let component: TalentsListComponent;
  let fixture: ComponentFixture<TalentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
