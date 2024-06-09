import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMatchesComponent } from './client-matches.component';

describe('ClientMatchesComponent', () => {
  let component: ClientMatchesComponent;
  let fixture: ComponentFixture<ClientMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientMatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
