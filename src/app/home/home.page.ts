import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public students: Student[];

  constructor(private studentService: StudentService, private alertController: AlertController, private router: Router) {
    this.students = this.studentService.getStudents();
  }

  public async deleteStudent(i: number) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      subHeader: '¿Estás seguro que deseas eliminar?',
      message: 'Esto es una confirmación',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { }
        },{
          text: 'Aceptar',
          role: 'confirm',
          handler: () => { this.students = this.studentService.removeStudents(i); }
        }
      ]
    });
    await alert.present();
  }

  public getStudentByControlNumber(cn: string): void {
    this.router.navigate(
      ['/view-student'],
      {
        queryParams: { controlNumber: cn }
      })
  }
  public addStudent(): void {
    this.router.navigate(
      ['/new-student']
    )
  }


}
