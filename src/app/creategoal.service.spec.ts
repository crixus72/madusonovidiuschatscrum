import { TestBed } from '@angular/core/testing';

import { CreategoalService } from './creategoal.service';

describe('CreategoalService', () => {
  let service: CreategoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreategoalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
