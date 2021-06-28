import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouseComponent } from './couse.component';

describe('CouseComponent', () => {
  let component: CouseComponent;
  let fixture: ComponentFixture<CouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
