import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oxy-stats',
  templateUrl: './oxy-stats.component.html',
  styleUrls: ['./oxy-stats.component.scss']
})
export class OxyStatsComponent implements OnInit {
  @Input() test_id : string;
  @Input() status : string;
  @Input() note : string; 
  constructor() { }

  ngOnInit(): void {
  }

}
