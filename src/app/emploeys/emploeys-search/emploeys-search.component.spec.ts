import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploeysSearchComponent } from './emploeys-search.component';

describe('EmploeysSearchComponent', () => {
  let component: EmploeysSearchComponent;
  let fixture: ComponentFixture<EmploeysSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploeysSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploeysSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
