"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-student_new-student_module_ts"],{

/***/ 7635:
/*!***********************************************************!*\
  !*** ./src/app/new-student/new-student-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewStudentPageRoutingModule": () => (/* binding */ NewStudentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _new_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-student.page */ 4589);




const routes = [
    {
        path: '',
        component: _new_student_page__WEBPACK_IMPORTED_MODULE_0__.NewStudentPage
    }
];
let NewStudentPageRoutingModule = class NewStudentPageRoutingModule {
};
NewStudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewStudentPageRoutingModule);



/***/ }),

/***/ 1682:
/*!***************************************************!*\
  !*** ./src/app/new-student/new-student.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewStudentPageModule": () => (/* binding */ NewStudentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _new_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-student-routing.module */ 7635);
/* harmony import */ var _new_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-student.page */ 4589);







let NewStudentPageModule = class NewStudentPageModule {
};
NewStudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewStudentPageRoutingModule
        ],
        declarations: [_new_student_page__WEBPACK_IMPORTED_MODULE_1__.NewStudentPage]
    })
], NewStudentPageModule);



/***/ }),

/***/ 4589:
/*!*************************************************!*\
  !*** ./src/app/new-student/new-student.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewStudentPage": () => (/* binding */ NewStudentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-student.page.html?ngResource */ 1195);
/* harmony import */ var _new_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-student.page.scss?ngResource */ 8637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/student.service */ 4339);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let NewStudentPage = class NewStudentPage {
    constructor(studentService, fb, tc) {
        this.studentService = studentService;
        this.fb = fb;
        this.tc = tc;
        this.searched = false;
    }
    searchStudent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.myForm.controls['controlNumber'].valid) {
                let st;
                st = this.studentService.getStudentByControlNumber(this.myForm.get('controlNumber').value);
                if (!st) {
                    let toast = yield this.tc.create({
                        message: 'Estudiante no encontrado',
                        duration: 2000
                    });
                    toast.present();
                    this.myForm.reset();
                }
                else {
                    this.myForm.controls['name'].setValue(st.name);
                    this.myForm.controls['curp'].setValue(st.curp);
                    this.myForm.controls['edad'].setValue(st.age);
                    this.myForm.controls['nip'].setValue(st.nip);
                    this.myForm.controls['email'].setValue(st.email);
                    this.myForm.controls['career'].setValue(st.career);
                    this.myForm.controls['photo'].setValue(st.photo);
                    this.searched = true;
                }
            }
            else {
                let toast = yield this.tc.create({
                    message: 'Verifique que el número de control sea válido',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
    addStudent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.myForm.valid) {
                let st = {
                    controlNumber: this.myForm.get('controlNumber').value,
                    name: this.myForm.get('name').value,
                    curp: this.myForm.get('curp').value,
                    age: this.myForm.get('edad').value,
                    nip: this.myForm.get('nip').value,
                    email: this.myForm.get('email').value,
                    career: this.myForm.get('career').value,
                    photo: this.myForm.get('photo').value
                };
                this.studentService.newStudent(st);
                this.myForm.reset();
                let toast = yield this.tc.create({
                    message: 'Estudiante agregado',
                    duration: 2000
                });
                toast.present();
            }
            else {
                let toast = yield this.tc.create({
                    message: 'Verifique que todos los campos estén correctos antes de agregar',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
    updateStudent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.myForm.valid) {
                let index = this.studentService.getStudentIndexByControlNumber(this.myForm.get('controlNumber').value);
                console.log(index);
                let studentsTemp = this.studentService.getStudents();
                studentsTemp[index] = {
                    controlNumber: this.myForm.get('controlNumber').value,
                    name: this.myForm.get('name').value,
                    curp: this.myForm.get('curp').value,
                    age: this.myForm.get('edad').value,
                    nip: this.myForm.get('nip').value,
                    email: this.myForm.get('email').value,
                    career: this.myForm.get('career').value,
                    photo: this.myForm.get('photo').value
                };
                this.studentService.setStudents(studentsTemp);
                this.myForm.reset();
                let toast = yield this.tc.create({
                    message: 'Estudiante actualizado',
                    duration: 2000
                });
                toast.present();
                this.searched = false;
            }
            else {
                let toast = yield this.tc.create({
                    message: 'Verifique que todos los campos estén correctos',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            controlNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$')])],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
            curp: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(18), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(18), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)])],
            edad: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(18)])],
            nip: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(9), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(9999)])],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$')])],
            career: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(3)])],
            photo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/https?:\/\/[\w\-\.]+\.\w{2,5}\/?\S*/)])]
        });
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
        };
    }
};
NewStudentPage.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
NewStudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-new-student',
        template: _new_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewStudentPage);



/***/ }),

/***/ 8637:
/*!**************************************************************!*\
  !*** ./src/app/new-student/new-student.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".errormessage {\n  color: red;\n  text-align: right;\n  padding-right: 10px;\n  font-style: italic;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1zdHVkZW50LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcRWplcmNpY2lvJTIwNFxcZWplLTAzXFxzcmNcXGFwcFxcbmV3LXN0dWRlbnRcXG5ldy1zdHVkZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoibmV3LXN0dWRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ybWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59IiwiLmVycm9ybWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */";

/***/ }),

/***/ 1195:
/*!**************************************************************!*\
  !*** ./src/app/new-student/new-student.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Agregar Estudiante</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <form [formGroup]=\"myForm\">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Número de Control</ion-label>\n            <ion-input formControlName=\"controlNumber\"></ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['controlNumber']\">\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('controlNumber').dirty || \n                                                myForm.get('controlNumber').touched) && \n                                                myForm.get('controlNumber').hasError(item.type)\">\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Nombre</ion-label>\n            <ion-input formControlName=\"name\"></ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['name']\">\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('name').dirty || myForm.get('name').touched) &&\n                      myForm.get('name').hasError(item.type)\">\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Curp</ion-label>\n            <ion-input formControlName=\"curp\"></ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['curp']\">\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('curp').dirty || myForm.get('curp').touched) &&\n                                myForm.get('curp').hasError(item.type)\">\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Edad</ion-label>\n            <ion-input formControlName=\"edad\" type=\"number\"></ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['edad']\">\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('edad').dirty || myForm.get('edad').touched) &&\n                                      myForm.get('edad').hasError(item.type)\">\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">NIP</ion-label>\n            <ion-input formControlName=\"nip\" type=\"number\"></ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['nip']\">\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('nip').dirty || myForm.get('nip').touched) &&\n                                                  myForm.get('nip').hasError(item.type)\">\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input formControlName=\"email\"></ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['email']\">\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('email').dirty || myForm.get('email').touched) &&\n                                                  myForm.get('email').hasError(item.type)\">\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-item>\n              <ion-select placeholder=\"Carrera\" formControlName=\"career\">\n                <ion-select-option value=\"ISC\">ISC</ion-select-option>\n                <ion-select-option value=\"IBQ\">IBQ</ion-select-option>\n                <ion-select-option value=\"IC\">IC</ion-select-option>\n                <ion-select-option value=\"ARQ\">ARQ</ion-select-option>\n                <ion-select-option value=\"IE\">IE</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div>\n              <ng-container *ngFor=\"let item of validationMessages['career']\">\n                <div class=\"errormessage\" *ngIf=\"(myForm.get('career').dirty || myForm.get('career').touched) &&\n                                                    myForm.get('career').hasError(item.type)\">\n                  {{item.message}}\n                </div>\n              </ng-container>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Foto</ion-label>\n            <ion-input formControlName=\"photo\"></ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['photo']\">\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('photo').dirty || myForm.get('photo').touched) &&\n                                                        myForm.get('photo').hasError(item.type)\">\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-button expand=\"block\" color=\"primary\" (click)=\"searchStudent()\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-button>\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"addStudent()\" *ngIf=\"myForm.valid && searched==false\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-button>\n    <ion-button expand=\"block\" color=\"tertiary\" (click)=\"updateStudent()\" *ngIf=\"searched==true\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-button>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_new-student_new-student_module_ts.js.map