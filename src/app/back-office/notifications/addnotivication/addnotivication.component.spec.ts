import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnotivicationComponent } from './addnotivication.component';

describe('AddnotivicationComponent', () => {
  let component: AddnotivicationComponent;
  let fixture: ComponentFixture<AddnotivicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnotivicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnotivicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
