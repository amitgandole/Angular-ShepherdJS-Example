import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {

  }

  getPatientDetails(): Observable<any> {
    return this.http.get('../assets/patient-data.json')
  }
}
