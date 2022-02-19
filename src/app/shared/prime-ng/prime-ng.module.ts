import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { ChipModule } from 'primeng/chip';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenuModule,
    TieredMenuModule,
    OrganizationChartModule,
    ChipModule
  ]
})
export class PrimeNgModule { }
