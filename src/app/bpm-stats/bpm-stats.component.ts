import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bpm-stats',
  templateUrl: './bpm-stats.component.html',
  styleUrls: ['./bpm-stats.component.scss']
})
export class BpmStatsComponent implements OnInit {
  @Input() test_id : string;
  @Input() status : string;
  @Input() note : string; 
  constructor() { }

  ngOnInit(): void {
  }

}
