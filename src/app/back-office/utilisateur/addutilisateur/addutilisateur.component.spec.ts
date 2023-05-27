import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtilisateurComponent } from './addutilisateur.component';

describe('AddUtilisateurComponent', () => {
  let component: AddUtilisateurComponent;
  let fixture: ComponentFixture<AddUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
