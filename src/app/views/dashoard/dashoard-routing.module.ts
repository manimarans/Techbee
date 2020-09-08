import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashoardComponent } from './dashoard.component';

const routes: Routes = [{
    path: '',
    component: DashoardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashoardRoutingModule { }
