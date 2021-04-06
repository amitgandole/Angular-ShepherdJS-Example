import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamecardStatsComponent } from './namecard-stats.component';

describe('NamecardStatsComponent', () => {
  let component: NamecardStatsComponent;
  let fixture: ComponentFixture<NamecardStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamecardStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamecardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
