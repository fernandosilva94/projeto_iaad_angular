import { TestBed } from '@angular/core/testing';

import { ApiCrudStartupService } from './api-crud-startup.service';

describe('ApiCrudStartupService', () => {
  let service: ApiCrudStartupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCrudStartupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
