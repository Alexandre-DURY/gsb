import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticiensSComponent } from './praticiens-s.component';

describe('PraticiensSComponent', () => {
  let component: PraticiensSComponent;
  let fixture: ComponentFixture<PraticiensSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticiensSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticiensSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
