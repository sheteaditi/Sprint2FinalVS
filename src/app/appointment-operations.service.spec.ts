import { TestBed } from '@angular/core/testing';

import { AppointmentOperationsService } from './appointment-operations.service';

describe('AppointmentOperationsService', () => {
  let service: AppointmentOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
