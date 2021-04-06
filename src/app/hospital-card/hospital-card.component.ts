import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-card',
  templateUrl: './hospital-card.component.html',
  styleUrls: ['./hospital-card.component.scss']
})
export class HospitalCardComponent implements OnInit {
  @Input() name : string;
  @Input() speciality : string;
  @Input() contact : string; 
  constructor() { }

  ngOnInit(): void {
  }

}
