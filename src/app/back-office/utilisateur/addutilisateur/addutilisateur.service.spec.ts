import { TestBed } from '@angular/core/testing';

import { AddutilisateurService } from './addutilisateur.service';

describe('AddutilisateurService', () => {
  let service: AddutilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddutilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
