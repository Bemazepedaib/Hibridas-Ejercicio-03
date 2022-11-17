import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  public myForm: FormGroup;
  public validationMessages: Object;
  public searched: Boolean = false;

  constructor(private studentService: StudentService, private fb: FormBuilder, private tc: ToastController) { }

  async searchStudent() {
    if (this.myForm.controls['controlNumber'].valid) {
      let st: Student;
      st = this.studentService.getStudentByControlNumber(this.myForm.get('controlNumber').value)
      if (!st) {
        let toast = await this.tc.create({
          message: 'Estudiante no encontrado',
          duration: 2000
        });
        toast.present();
        this.myForm.reset();
      } else {
        this.myForm.controls['name'].setValue(st.name);
        this.myForm.controls['curp'].setValue(st.curp);
        this.myForm.controls['edad'].setValue(st.age);
        this.myForm.controls['nip'].setValue(st.nip);
        this.myForm.controls['email'].setValue(st.email);
        this.myForm.controls['career'].setValue(st.career)
        this.myForm.controls['photo'].setValue(st.photo);
        this.searched = true;
      }
    } else {
      let toast = await this.tc.create({
        message: 'Verifique que el número de control sea válido',
        duration: 2000
      });
      toast.present();
    }

  }

  async addStudent() {
    if (this.myForm.valid) {
      let st: Student = {
        controlNumber: this.myForm.get('controlNumber').value,
        name: this.myForm.get('name').value,
        curp: this.myForm.get('curp').value,
        age: this.myForm.get('edad').value,
        nip: this.myForm.get('nip').value,
        email: this.myForm.get('email').value,
        career: this.myForm.get('career').value,
        photo: this.myForm.get('photo').value
      };
      this.studentService.newStudent(st)
      this.myForm.reset();
      let toast = await this.tc.create({
        message: 'Estudiante agregado',
        duration: 2000
      });
      toast.present();
    } else {
      let toast = await this.tc.create({
        message: 'Verifique que todos los campos estén correctos antes de agregar',
        duration: 2000
      });
      toast.present();
    }
  }

  async updateStudent() {
    if (this.myForm.valid) {
      let index = this.studentService.getStudentIndexByControlNumber(this.myForm.get('controlNumber').value)
      console.log(index)
      let studentsTemp = this.studentService.getStudents()
      studentsTemp[index] = {
        controlNumber: this.myForm.get('controlNumber').value,
        name: this.myForm.get('name').value,
        curp: this.myForm.get('curp').value,
        age: this.myForm.get('edad').value,
        nip: this.myForm.get('nip').value,
        email: this.myForm.get('email').value,
        career: this.myForm.get('career').value,
        photo: this.myForm.get('photo').value
      }
      this.studentService.setStudents(studentsTemp)
      this.myForm.reset();
      let toast = await this.tc.create({
        message: 'Estudiante actualizado',
        duration: 2000
      });
      toast.present();
      this.searched = false;
    } else {
      let toast = await this.tc.create({
        message: 'Verifique que todos los campos estén correctos',
        duration: 2000
      });
      toast.present();
    }
  }

  ngOnInit() {
    this.myForm = this.fb.group(
      {
        controlNumber: ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('^[0-9]+$')])],
        name: ["", Validators.compose([Validators.required])],
        curp: ["", Validators.compose([Validators.required, Validators.minLength(18), Validators.maxLength(18), Validators.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)])],
        edad: ["", Validators.compose([Validators.required, Validators.min(18)])],
        nip: ["", Validators.compose([Validators.required, Validators.min(9), Validators.max(9999)])],
        email: ["", Validators.compose([Validators.required, Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$')])],
        career: ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(3)])],
        photo: ["", Validators.compose([Validators.required, Validators.pattern(/https?:\/\/[\w\-\.]+\.\w{2,5}\/?\S*/)])]

      }
    );

    this.validationMessages = {
      'controlNumber': [
        { type: 'required', message: "Número de control obligatorio" },
        { type: 'minLength', message: "El número de control debe de ser de 8 dígitos" },
        { type: 'maxLength', message: "El número de control debe de ser de 8 dígitos" },
        { type: 'pattern', message: "El número de control está mal formado" }
      ],
      'name': [
        { type: 'required', message: "Nombre obligatorio" }
      ],
      'curp': [
        { type: 'required', message: "La curp es obligatoria" },
        { type: 'minLength', message: "La curp debe ser de 18 digitos" },
        { type: 'maxLength', message: "La curp debe ser de 18 digitos" },
        { type: 'pattern', message: "La curp está mal formada" }
      ],
      'edad': [
        { type: 'required', message: "La edad es obligatoria" },
        { type: 'min', message: "La edad debe ser mayor a 17" },
      ],
      'nip': [
        { type: 'required', message: "El nip es obligatorio" },
        { type: 'min', message: "El nip debe ser mayor a 9" },
        { type: 'max', message: "El nip debe ser menor a 9999" }
      ],
      'email': [
        { type: 'required', message: "Correo obligatorio" },
        { type: 'pattern', message: "El correo está mal formado" }
      ],
      'career': [
        { type: 'required', message: "Elige una carrera" },
        { type: 'minLength', message: "Elige una carrera" },
        { type: 'maxLength', message: "Elige una carrera" }
      ],
      'photo': [
        { type: 'required', message: "foto obligatoria" },
        { type: 'pattern', message: "El url está mal formado" }
      ]
    }
  }

}
