import { TestBed } from '@angular/core/testing';

import { HandlePhotoService } from './handle-photo.service';

describe('HandlePhotoService', () => {
  let service: HandlePhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlePhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
