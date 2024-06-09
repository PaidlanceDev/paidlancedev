import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNewProjectComponent } from './client-new-project.component';

describe('ClientNewProjectComponent', () => {
  let component: ClientNewProjectComponent;
  let fixture: ComponentFixture<ClientNewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientNewProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
