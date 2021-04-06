import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-namecard-stats',
  templateUrl: './namecard-stats.component.html',
  styleUrls: ['./namecard-stats.component.scss']
})
export class NamecardStatsComponent implements OnInit {

  @Input() name : string;
  @Input() contact_no : string;
  @Input() address : string; 
  @Input() designation : string;

  constructor() { }

  ngOnInit(): void {
  }

}
