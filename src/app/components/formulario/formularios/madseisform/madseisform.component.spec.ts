import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadseisformComponent } from './madseisform.component';

describe('MadseisformComponent', () => {
  let component: MadseisformComponent;
  let fixture: ComponentFixture<MadseisformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadseisformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadseisformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
