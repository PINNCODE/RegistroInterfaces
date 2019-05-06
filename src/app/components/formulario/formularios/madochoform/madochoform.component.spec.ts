import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadochoformComponent } from './madochoform.component';

describe('MadochoformComponent', () => {
  let component: MadochoformComponent;
  let fixture: ComponentFixture<MadochoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadochoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadochoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
