import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadceroformComponent } from './madceroform.component';

describe('MadceroformComponent', () => {
  let component: MadceroformComponent;
  let fixture: ComponentFixture<MadceroformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadceroformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadceroformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
