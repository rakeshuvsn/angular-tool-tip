import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularToolTipComponent } from './angular-tool-tip.component';

describe('AngularToolTipComponent', () => {
  let component: AngularToolTipComponent;
  let fixture: ComponentFixture<AngularToolTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularToolTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
