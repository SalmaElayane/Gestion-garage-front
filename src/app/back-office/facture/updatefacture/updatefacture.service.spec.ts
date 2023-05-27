import { TestBed } from '@angular/core/testing';

import { UpdatefactureService } from './updatefacture.service';

describe('UpdatefactureService', () => {
  let service: UpdatefactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatefactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
