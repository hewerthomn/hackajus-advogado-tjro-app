import { TestBed } from '@angular/core/testing';

import { PeticaoService } from './peticao.service';

describe('PeticaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeticaoService = TestBed.get(PeticaoService);
    expect(service).toBeTruthy();
  });
});
