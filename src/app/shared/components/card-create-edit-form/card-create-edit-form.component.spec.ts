import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreateEditFormComponent } from './card-create-edit-form.component';

describe('CardCreateEditFormComponent', () => {
  let component: CardCreateEditFormComponent;
  let fixture: ComponentFixture<CardCreateEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCreateEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreateEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
