import { TestBed, inject } from '@angular/core/testing';

import { GauthenticationService } from './gauthentication.service';

describe('GauthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GauthenticationService]
    });
  });

  it('should be created', inject([GauthenticationService], (service: GauthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
