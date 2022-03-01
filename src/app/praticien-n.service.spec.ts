import { TestBed, inject } from '@angular/core/testing';

import { PraticienNService } from './praticien-n.service';

describe('PraticienNService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PraticienNService]
    });
  });

  it('should be created', inject([PraticienNService], (service: PraticienNService) => {
    expect(service).toBeTruthy();
  }));
});
