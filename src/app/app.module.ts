import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OxyStatsComponent } from './oxy-stats/oxy-stats.component';
import { BpmStatsComponent } from './bpm-stats/bpm-stats.component';
import { SugarStatsComponent } from './sugar-stats/sugar-stats.component';
import { NamecardStatsComponent } from './namecard-stats/namecard-stats.component';
import { EmergencyCardComponent } from './emergency-card/emergency-card.component';
import { HospitalCardComponent } from './hospital-card/hospital-card.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OxyStatsComponent,
    BpmStatsComponent,
    SugarStatsComponent,
    NamecardStatsComponent,
    EmergencyCardComponent,
    HospitalCardComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
