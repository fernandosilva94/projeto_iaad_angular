import { TestBed } from '@angular/core/testing';

import { ApiCrudService } from './api-crud.service';

describe('ApiCrudService', () => {
  let service: ApiCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
