import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import {TieredMenuModule} from 'primeng/tieredmenu';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenuModule,
    TieredMenuModule

  ]
})
export class PrimeNgModule { }
