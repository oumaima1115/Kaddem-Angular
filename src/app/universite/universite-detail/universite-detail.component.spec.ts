import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteDetailComponent } from './universite-detail.component';

describe('UniversiteDetailComponent', () => {
  let component: UniversiteDetailComponent;
  let fixture: ComponentFixture<UniversiteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversiteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
