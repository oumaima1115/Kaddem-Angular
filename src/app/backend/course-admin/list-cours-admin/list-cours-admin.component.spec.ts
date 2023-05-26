import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoursAdminComponent } from './list-cours-admin.component';

describe('ListCoursAdminComponent', () => {
  let component: ListCoursAdminComponent;
  let fixture: ComponentFixture<ListCoursAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCoursAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoursAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
