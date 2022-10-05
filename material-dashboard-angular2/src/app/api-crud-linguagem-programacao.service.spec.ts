import { TestBed } from '@angular/core/testing';

import { ApiCrudLinguagemProgramacaoService } from './api-crud-linguagem-programacao.service';

describe('ApiCrudLinguagemProgramacaoService', () => {
  let service: ApiCrudLinguagemProgramacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCrudLinguagemProgramacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
