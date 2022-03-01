import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticiensNComponent } from './praticiens-n.component';

describe('PraticiensNComponent', () => {
  let component: PraticiensNComponent;
  let fixture: ComponentFixture<PraticiensNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticiensNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticiensNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
