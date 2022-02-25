import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TafPageComponent } from './taf-page.component';

describe('TafPageComponent', () => {
  let component: TafPageComponent;
  let fixture: ComponentFixture<TafPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TafPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TafPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
