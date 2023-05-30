import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploeysComponent } from './emploeys.component';

describe('EmploeysComponent', () => {
  let component: EmploeysComponent;
  let fixture: ComponentFixture<EmploeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploeysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
