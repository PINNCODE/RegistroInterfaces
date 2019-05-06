import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaddosformComponent } from './maddosform.component';

describe('MaddosformComponent', () => {
  let component: MaddosformComponent;
  let fixture: ComponentFixture<MaddosformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaddosformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaddosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
