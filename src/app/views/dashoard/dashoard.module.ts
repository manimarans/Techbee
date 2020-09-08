import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashoardRoutingModule } from './dashoard-routing.module';
import { DashoardComponent } from './dashoard.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ChartViewComponent } from './components/chart-view/chart-view.component';
import { AmChartsModule } from '@amcharts/amcharts3-angular';

@NgModule({
  declarations: [DashoardComponent, ChartViewComponent],
  imports: [
    CommonModule,
    DashoardRoutingModule,
    SharedModule,
    AmChartsModule
  ]
})
export class DashoardModule { }
