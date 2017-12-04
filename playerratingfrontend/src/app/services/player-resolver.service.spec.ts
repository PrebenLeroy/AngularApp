import { TestBed, inject } from '@angular/core/testing';

import { PlayerResolverService } from './player-resolver.service';

describe('PlayerResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerResolverService]
    });
  });

  it('should be created', inject([PlayerResolverService], (service: PlayerResolverService) => {
    expect(service).toBeTruthy();
  }));
});
