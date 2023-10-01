import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {


  students: string[] = ['Ahoud Nasser', 'Amal Hammed', 'Qabas Salim'];
  number=0;
  attendance: { [student: string]: boolean } = {};
getStyle: { [klass: string]: any; }|null|undefined;

  markAttendance(student: string) {
    this.attendance[student] = !this.attendance[student];
  }

  submitAttendance() {
    // Here you can send the attendance data to the server or perform any other action
    console.log('Attendance:', this.attendance);
  }
}
