import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugar-stats',
  templateUrl: './sugar-stats.component.html',
  styleUrls: ['./sugar-stats.component.scss']
})
export class SugarStatsComponent implements OnInit {
  @Input() test_id : string;
  @Input() status : string;
  @Input() note : string;
  constructor() { }

  ngOnInit(): void {
  }

}
