import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ReactiveFormsModule } from "@angular/forms";
import { StatusComponent } from './status/status.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxTagsInputModule } from 'ngx-tags-input';

@NgModule({
  declarations: [AddComponent, StatusComponent, ViewAllComponent, ViewDetailComponent],
  imports: [
    CommonModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    NgbModule,
    NgxTagsInputModule,
    RouterModule
  ],
  exports: [AddComponent, StatusComponent, ViewAllComponent, ViewDetailComponent]
})
export class ProjectModule { }
