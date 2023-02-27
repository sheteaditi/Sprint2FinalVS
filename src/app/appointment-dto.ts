export class AppointmentDTO {

    appointmentId: number;
    date: string;
    status: string;
    patientName : string;
    patientPhoneNumber: string;
    patientAge: number;
    patientCity: string;
    patientGender: string;
    patientDisease: string;
    patientBloodGroup: string;
    doctorName: string;
    speciality: string;
    hospitalName: string;
    

    constructor(appointmentId: number,
        date: string,
        status: string,
        patientName : string,
        patientPhoneNumber: string,
        patientAge: number,
        patientCity: string,
        patientGender: string,
        patientDisease: string,
        patientBloodGroup: string,
        doctorName: string,
        speciality: string,
        hospitalName: string)
    {
        this.appointmentId = appointmentId;
        this.date = date;
        this.status = status;
        this.doctorName = doctorName;
        this.patientName = patientName;
        this.patientPhoneNumber = patientPhoneNumber;
        this.patientAge = patientAge;
        this.patientCity = patientCity;
        this.patientGender = patientGender;
        this.patientDisease = patientDisease;
        this.patientBloodGroup = patientBloodGroup;
        this.speciality = speciality;
        this.hospitalName = hospitalName;

    }
}
