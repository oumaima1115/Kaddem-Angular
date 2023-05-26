import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUnivAdminComponent } from './liste-univ-admin.component';

describe('ListeUnivAdminComponent', () => {
  let component: ListeUnivAdminComponent;
  let fixture: ComponentFixture<ListeUnivAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeUnivAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeUnivAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
