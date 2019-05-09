import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenJsonComponent } from './gen-json.component';

describe('GenJsonComponent', () => {
  let component: GenJsonComponent;
  let fixture: ComponentFixture<GenJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
