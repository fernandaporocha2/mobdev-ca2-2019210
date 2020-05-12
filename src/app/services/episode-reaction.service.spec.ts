import { TestBed } from '@angular/core/testing';

import { EpisodeReactionService } from './episode-reaction.service';

describe('EpisodeReactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpisodeReactionService = TestBed.get(EpisodeReactionService);
    expect(service).toBeTruthy();
  });
});
