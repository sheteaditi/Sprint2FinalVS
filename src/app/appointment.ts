export class Appointment {

    appointmentId: number;
    date : string;
    status: string;
    doctorName: string;
    patientName: string;
    speciality: string;
    hospitalName: string;
    patientPhoneNumber: string; 

    constructor(appointmentId: number,
    speciality: string,
    date : string,
    status: string,
    doctorName: string,
    patientName: string,
    hospitalName: string,
    patientPhoneNumber: string)
    {
        this.appointmentId = appointmentId;
        this.date = date;
        this.status = status;
        this.doctorName = doctorName;
        this.patientName = patientName;
        this.speciality = speciality;
        this.hospitalName = hospitalName;
        this.patientPhoneNumber = patientPhoneNumber;
    }
}
