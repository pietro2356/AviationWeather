import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetarPageComponent } from './metar-page.component';

describe('MetarPageComponent', () => {
  let component: MetarPageComponent;
  let fixture: ComponentFixture<MetarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
