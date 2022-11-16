import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: string
  public pass: string

  constructor(private router: Router, private tc: ToastController, private studentService: StudentService) { }

  ngOnInit() {
  }

  async login() {
    if (this.user == "Admin" && this.pass == "test") {
      this.router.navigate(
        ['/home']
      )
      this.user = ""
      this.pass = ""
    } else {
      if (this.alumnoValido()) {
        this.router.navigate(
          ['/view-student'],
          {
            queryParams: { controlNumber: this.user.toString() }
          })
        this.user = ""
        this.pass = ""
      } else {
        let toast = await this.tc.create({
          message: 'Credenciales no válidas',
          duration: 1000
        });
        toast.present();
      }
    }
  }

  alumnoValido(): Boolean {
    let ts = this.studentService.getStudentByControlNumber(this.user)
    if (ts) {
      if (ts.nip.toString() == this.pass) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}
