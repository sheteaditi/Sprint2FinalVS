import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentOperationsService } from '../appointment-operations.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  status=false;
  message='';
  __appointmentService:AppointmentOperationsService;

  allAppointments:Appointment[]=[];

  p:Appointment= new Appointment(0,'','','','','','','')
  constructor(appointmentService:AppointmentOperationsService)
  {
    this.__appointmentService = appointmentService;
    this.allAppointments= this.__appointmentService.getAppointmentArr();
  }

  // doFormSubmit()
  // {
  //   console.log("form submit button clicked")
  //   console.log(this.__appointmentService);
  // }

  doFormSubmit(){
    console.log(this.p);
    this.__appointmentService.Submit(this.p).subscribe(
      data=>{
        this.status=true;
        this.message="Appointment Added";
      },
      error=>{
        this.message="error";

      }
    )
  }

  readAppointment(appointmentId:number,date:string,status:string,patientName:string,patientPhoneNumber:string,hospitalName:string,speciality:string,doctorName:string)
  {
      console.log(appointmentId+" "+date+" "+status+" "+patientName+" "+patientPhoneNumber+" "+hospitalName+" "+speciality+" "+doctorName);
      let appointmentFromUser:Appointment = new Appointment(appointmentId,date,status,patientName,patientPhoneNumber,hospitalName,speciality,doctorName);
      this.__appointmentService.Submit(appointmentFromUser);
  }



}
