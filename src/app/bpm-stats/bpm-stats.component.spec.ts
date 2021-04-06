import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmStatsComponent } from './bpm-stats.component';

describe('BpmStatsComponent', () => {
  let component: BpmStatsComponent;
  let fixture: ComponentFixture<BpmStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpmStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
