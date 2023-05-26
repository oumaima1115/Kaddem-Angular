import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCousComponent } from './liste-cous.component';

describe('ListeCousComponent', () => {
  let component: ListeCousComponent;
  let fixture: ComponentFixture<ListeCousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
