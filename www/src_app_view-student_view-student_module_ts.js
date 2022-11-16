"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view-student_view-student_module_ts"],{

/***/ 7663:
/*!*************************************************************!*\
  !*** ./src/app/view-student/view-student-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewStudentPageRoutingModule": () => (/* binding */ ViewStudentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-student.page */ 93);




const routes = [
    {
        path: '',
        component: _view_student_page__WEBPACK_IMPORTED_MODULE_0__.ViewStudentPage
    }
];
let ViewStudentPageRoutingModule = class ViewStudentPageRoutingModule {
};
ViewStudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewStudentPageRoutingModule);



/***/ }),

/***/ 8072:
/*!*****************************************************!*\
  !*** ./src/app/view-student/view-student.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewStudentPageModule": () => (/* binding */ ViewStudentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-student-routing.module */ 7663);
/* harmony import */ var _view_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-student.page */ 93);







let ViewStudentPageModule = class ViewStudentPageModule {
};
ViewStudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewStudentPageRoutingModule
        ],
        declarations: [_view_student_page__WEBPACK_IMPORTED_MODULE_1__.ViewStudentPage]
    })
], ViewStudentPageModule);



/***/ }),

/***/ 93:
/*!***************************************************!*\
  !*** ./src/app/view-student/view-student.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewStudentPage": () => (/* binding */ ViewStudentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-student.page.html?ngResource */ 7844);
/* harmony import */ var _view_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-student.page.scss?ngResource */ 8618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/student.service */ 4339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let ViewStudentPage = class ViewStudentPage {
    constructor(studentService, activatedRoute) {
        this.studentService = studentService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            console.log(params);
            this.Student = this.studentService.getStudentByControlNumber(params.controlNumber);
        });
    }
};
ViewStudentPage.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ViewStudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-view-student',
        template: _view_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewStudentPage);



/***/ }),

/***/ 8618:
/*!****************************************************************!*\
  !*** ./src/app/view-student/view-student.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXN0dWRlbnQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7844:
/*!****************************************************************!*\
  !*** ./src/app/view-student/view-student.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Perfil de {{Student.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img [src]=\"Student.photo\"/>\n    <ion-card-header>\n      <ion-card-title>\n        <ion-label>\n          {{Student.controlNumber}}\n          <ion-chip color=\"primary\" class=\"ion-float-right\">\n            <ion-label>{{Student.career}}</ion-label>\n          </ion-chip>\n        </ion-label>\n      </ion-card-title>\n      <ion-card-subtitle>\n        {{Student.email}}\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <h2>\n        CURP: {{Student.curp}}\n      </h2>\n      <h2>\n        EDAD: {{Student.age}} años\n      </h2>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_view-student_view-student_module_ts.js.map