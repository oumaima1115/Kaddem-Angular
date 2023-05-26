import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheFrontComponent } from './tacheFront.component';

describe('TacheFrontComponent', () => {
  let component: TacheFrontComponent;
  let fixture: ComponentFixture<TacheFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
