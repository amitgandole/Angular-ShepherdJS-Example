import { TestBed } from '@angular/core/testing';

import { AppTourService } from './app-tour.service';

describe('AppTourService', () => {
  let service: AppTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
