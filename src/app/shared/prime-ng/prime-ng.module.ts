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
import {FileUploadModule} from 'primeng/fileupload';
import {ProgressBarModule} from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';

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
    ToastModule,
    FileUploadModule,
    ProgressBarModule,
    TagModule,
    TableModule,
    RatingModule
  ]
})
export class PrimeNgModule { }
