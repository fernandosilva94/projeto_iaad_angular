import { TestBed } from '@angular/core/testing';

import { ApiCrudProgramadorLinguagemService } from './api-crud-programador-linguagem.service';

describe('ApiCrudProgramadorLinguagemService', () => {
  let service: ApiCrudProgramadorLinguagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCrudProgramadorLinguagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
