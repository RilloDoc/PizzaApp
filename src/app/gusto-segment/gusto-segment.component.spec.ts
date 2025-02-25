import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GustoSegmentComponent } from './gusto-segment.component';

describe('GustoSegmentComponent', () => {
  let component: GustoSegmentComponent;
  let fixture: ComponentFixture<GustoSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GustoSegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GustoSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
