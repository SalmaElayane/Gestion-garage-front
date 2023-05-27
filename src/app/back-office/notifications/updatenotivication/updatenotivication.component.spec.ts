import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenotivicationComponent } from './updatenotivication.component';

describe('UpdatenotivicationComponent', () => {
  let component: UpdatenotivicationComponent;
  let fixture: ComponentFixture<UpdatenotivicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatenotivicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatenotivicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
