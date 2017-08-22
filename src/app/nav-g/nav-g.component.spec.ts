import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGComponent } from './nav-g.component';

describe('NavGComponent', () => {
  let component: NavGComponent;
  let fixture: ComponentFixture<NavGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
