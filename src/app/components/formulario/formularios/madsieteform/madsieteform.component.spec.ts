import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadsieteformComponent } from './madsieteform.component';

describe('MadsieteformComponent', () => {
  let component: MadsieteformComponent;
  let fixture: ComponentFixture<MadsieteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadsieteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadsieteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
