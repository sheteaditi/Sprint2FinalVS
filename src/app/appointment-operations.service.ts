import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import { AppointmentDTO } from './appointment-dto';

@Injectable({
  providedIn: 'root'
})
export class AppointmentOperationsService {

  baseURL:string = 'http://localhost:9090';
  appointmentByDateEndPoint:string=this.baseURL+'/appointment/byDate';
  appointmentByStatusEndPoint:string=this.baseURL+'/appointment/byStatus';
  appointmentByPatientEndPoint:string=this.baseURL+'/appointment/patient';
  submitAppointmentEndpoint:string=this.baseURL+'/appointment/register';
  viewAppointmentEndpoint:string=this.baseURL+'/appointment/list';

  appointmentArr:Appointment[] = [];
  

  constructor(private http:HttpClient) { 

    console.log("Inside Constructor "+this.appointmentByDateEndPoint);
    console.log("Inside Constructor "+this.appointmentByStatusEndPoint);
    console.log("Inside Constructor "+this.appointmentByPatientEndPoint);
    console.log("Inside Constructor "+this.submitAppointmentEndpoint);


  }

  getAppointmentByDate(date:string):Observable<AppointmentDTO[]>{
    console.log("Inside Method 1 "+this.appointmentByDateEndPoint);
    this.appointmentByDateEndPoint=this.appointmentByDateEndPoint+'/'+date;
    console.log("After adding name 2 "+this.appointmentByDateEndPoint);

    return this.http.get<AppointmentDTO[]>(`${this.appointmentByDateEndPoint}`);
  }
  
  getAppointmentByStatus(status:string):Observable<AppointmentDTO[]>{
    console.log("Inside Method 1 "+this.appointmentByStatusEndPoint);
    this.appointmentByStatusEndPoint=this.appointmentByStatusEndPoint+'/'+status;
    console.log("After adding name 2 "+this.appointmentByStatusEndPoint);

    return this.http.get<AppointmentDTO[]>(`${this.appointmentByStatusEndPoint}`);
  }

  
  getAppointmentByPatient(patientName:string):Observable<AppointmentDTO[]>{
    console.log("Inside Method 1 "+this.appointmentByPatientEndPoint);
    this.appointmentByPatientEndPoint=this.appointmentByPatientEndPoint+'/'+patientName;
    console.log("After adding name 2 "+this.appointmentByPatientEndPoint);

    return this.http.get<AppointmentDTO[]>(`${this.appointmentByPatientEndPoint}`);
  }


Submit(appointment:Appointment):Observable<Appointment>{
  console.log("Inside the method :"+appointment);
  return this.http.post<Appointment>(`${this.submitAppointmentEndpoint}`,appointment);
}

getAllAppointments():Observable<AppointmentDTO[]>
{
  console.log("inside service : "+this.viewAppointmentEndpoint);
  return this.http.get<AppointmentDTO[]>(`${this.viewAppointmentEndpoint}`);
}

  getAppointmentArr():Appointment[]
  {
    return this.appointmentArr;
  }


}
