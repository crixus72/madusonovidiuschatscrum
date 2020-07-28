import { TestBed } from '@angular/core/testing';

import { CreateprojectService } from './createproject.service';

describe('CreateprojectService', () => {
  let service: CreateprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
