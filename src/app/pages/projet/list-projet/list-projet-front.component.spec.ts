import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjetFrontComponent } from './list-projet-front.component';

describe('ListProjetFrontComponent', () => {
  let component: ListProjetFrontComponent;
  let fixture: ComponentFixture<ListProjetFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjetFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjetFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
