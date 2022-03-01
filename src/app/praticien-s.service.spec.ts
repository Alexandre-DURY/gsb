import { TestBed, inject } from '@angular/core/testing';

import { PraticienSService } from './praticien-s.service';

describe('PraticienSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PraticienSService]
    });
  });

  it('should be created', inject([PraticienSService], (service: PraticienSService) => {
    expect(service).toBeTruthy();
  }));
});
