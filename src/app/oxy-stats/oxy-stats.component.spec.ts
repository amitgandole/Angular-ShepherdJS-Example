import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxyStatsComponent } from './oxy-stats.component';

describe('OxyStatsComponent', () => {
  let component: OxyStatsComponent;
  let fixture: ComponentFixture<OxyStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxyStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OxyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
