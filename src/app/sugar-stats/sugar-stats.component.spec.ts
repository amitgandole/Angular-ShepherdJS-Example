import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarStatsComponent } from './sugar-stats.component';

describe('SugarStatsComponent', () => {
  let component: SugarStatsComponent;
  let fixture: ComponentFixture<SugarStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
