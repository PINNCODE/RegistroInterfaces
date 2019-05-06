import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadtresformComponent } from './madtresform.component';

describe('MadtresformComponent', () => {
  let component: MadtresformComponent;
  let fixture: ComponentFixture<MadtresformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadtresformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadtresformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
