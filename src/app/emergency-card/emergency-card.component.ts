import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-card',
  templateUrl: './emergency-card.component.html',
  styleUrls: ['./emergency-card.component.scss']
})
export class EmergencyCardComponent implements OnInit {
  @Input() name : string;
  @Input() relation : string;
  @Input() contact : string; 
  constructor() { }

  ngOnInit(): void {
  }

}
