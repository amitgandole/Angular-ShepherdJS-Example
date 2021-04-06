import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppTourService } from '../app-tour.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  patients = []
  constructor(public apiService: ApiService, public appTourService:AppTourService) { }

  ngOnInit(): void {
    this.apiService.getPatientDetails().subscribe(p => {
      this.patients = p;
    });
  }
 

}
