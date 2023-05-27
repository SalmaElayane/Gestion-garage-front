import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemaintenenceComponent } from './updatemaintenence.component';

describe('UpdatemaintenenceComponent', () => {
  let component: UpdatemaintenenceComponent;
  let fixture: ComponentFixture<UpdatemaintenenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemaintenenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemaintenenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
