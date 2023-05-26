import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailEquipeFrontComponent } from './list-detail-equipe-front.component';

describe('ListDetailEquipeFrontComponent', () => {
  let component: ListDetailEquipeFrontComponent;
  let fixture: ComponentFixture<ListDetailEquipeFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailEquipeFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailEquipeFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
