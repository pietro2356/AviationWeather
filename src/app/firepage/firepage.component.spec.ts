import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirepageComponent } from './firepage.component';

describe('FirepageComponent', () => {
  let component: FirepageComponent;
  let fixture: ComponentFixture<FirepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
