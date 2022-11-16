import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewStudentPage } from './view-student.page';

const routes: Routes = [
  {
    path: '',
    component: ViewStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewStudentPageRoutingModule {}
