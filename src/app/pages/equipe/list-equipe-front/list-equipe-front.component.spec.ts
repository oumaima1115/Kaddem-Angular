import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipeFrontComponent } from './list-equipe-front.component';

describe('ListEquipeFrontComponent', () => {
  let component: ListEquipeFrontComponent;
  let fixture: ComponentFixture<ListEquipeFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEquipeFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEquipeFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
