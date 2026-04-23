import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashbord } from './client-dashbord';

describe('ClientDashbord', () => {
  let component: ClientDashbord;
  let fixture: ComponentFixture<ClientDashbord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDashbord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDashbord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
