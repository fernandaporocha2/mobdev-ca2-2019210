import { TestBed } from '@angular/core/testing';

import { CharacterReactionService } from './character-reaction.service';

describe('CharacterReactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterReactionService = TestBed.get(CharacterReactionService);
    expect(service).toBeTruthy();
  });
});
