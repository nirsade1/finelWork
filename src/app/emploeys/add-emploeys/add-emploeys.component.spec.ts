import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploeysComponent } from './add-emploeys.component';

describe('AddEmploeysComponent', () => {
  let component: AddEmploeysComponent;
  let fixture: ComponentFixture<AddEmploeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmploeysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmploeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
