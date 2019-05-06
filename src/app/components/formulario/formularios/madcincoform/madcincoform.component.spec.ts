import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadcincoformComponent } from './madcincoform.component';

describe('MadcincoformComponent', () => {
  let component: MadcincoformComponent;
  let fixture: ComponentFixture<MadcincoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadcincoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadcincoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
