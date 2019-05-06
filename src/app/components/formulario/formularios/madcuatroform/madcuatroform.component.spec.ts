import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadcuatroformComponent } from './madcuatroform.component';

describe('MadcuatroformComponent', () => {
  let component: MadcuatroformComponent;
  let fixture: ComponentFixture<MadcuatroformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadcuatroformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadcuatroformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
