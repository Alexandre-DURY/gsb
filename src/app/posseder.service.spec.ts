import { TestBed, inject } from '@angular/core/testing';

import { PossederService } from './posseder.service';

describe('PossederService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PossederService]
    });
  });

  it('should be created', inject([PossederService], (service: PossederService) => {
    expect(service).toBeTruthy();
  }));
});
