import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadunoformComponent } from './madunoform.component';

describe('MadunoformComponent', () => {
  let component: MadunoformComponent;
  let fixture: ComponentFixture<MadunoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadunoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadunoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
