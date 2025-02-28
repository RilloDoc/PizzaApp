import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeListComponent } from './time-list.component';

describe('TimeListComponent', () => {
  let component: TimeListComponent;
  let fixture: ComponentFixture<TimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
