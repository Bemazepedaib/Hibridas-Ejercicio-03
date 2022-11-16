import { Injectable } from '@angular/core';
import { Student } from "../models/student"

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor() {
    this.students = [{
      controlNumber: "18401214",
      name: "Benjamin Zepeda",
      curp: "ZEIB000212HCHPBNA6",
      age: 22,
      nip: 1234,
      email: "bemazepedaib@ittepic.edu.mx",
      career: "ISC",
      photo: "https://picsum.photos/200/300"
    }, {
      controlNumber: "18401158",
      name: "Gustavo Lemus",
      curp: "MAOG770826HOCRRS21",
      age: 22,
      nip: 1234,
      email: "gumarinle@ittepic.edu.mx",
      career: "ISC",
      photo: "https://picsum.photos/200/300"
    }];
  }

  public getStudents(): Student[] {
    return this.students;
  }
  public removeStudents(pos: number) {
    this.students.splice(pos, 1);
    return this.students;
  }
  public setStudents(st: Student[]) {
    this.students = st;
  }
  public getStudentByControlNumber(cn: string): Student {
    let item: Student;
    item = this.students.find(
      (student) => {
        return student.controlNumber===cn;
      }
    );
    return item;
  }
  public getStudentIndexByControlNumber(cn: string): number {
    let index = this.students.findIndex(
      (student) => {
        return student.controlNumber===cn;
      }
    );
    return index
  }
  public newStudent(p:Student){
    this.students.push(p);
  }
}
