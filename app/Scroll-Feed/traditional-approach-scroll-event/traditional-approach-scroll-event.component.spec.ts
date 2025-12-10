import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalApproachScrollEventComponent } from './traditional-approach-scroll-event.component';

describe('TraditionalApproachScrollEventComponent', () => {
  let component: TraditionalApproachScrollEventComponent;
  let fixture: ComponentFixture<TraditionalApproachScrollEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraditionalApproachScrollEventComponent]
    });
    fixture = TestBed.createComponent(TraditionalApproachScrollEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
