import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCDKVirtualScrollComponent } from './angular-cdk-virtual-scroll.component';

describe('AngularCDKVirtualScrollComponent', () => {
  let component: AngularCDKVirtualScrollComponent;
  let fixture: ComponentFixture<AngularCDKVirtualScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularCDKVirtualScrollComponent]
    });
    fixture = TestBed.createComponent(AngularCDKVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
