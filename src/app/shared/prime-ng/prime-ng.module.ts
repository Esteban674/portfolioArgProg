import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { ChipModule } from 'primeng/chip';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenuModule,
    TieredMenuModule,
    OrganizationChartModule,
    ChipModule,
    InputTextModule,
    CalendarModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
