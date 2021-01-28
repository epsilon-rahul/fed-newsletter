import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { EventComponent } from "./event/event.component";

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ],
})
export class EventModule { }
