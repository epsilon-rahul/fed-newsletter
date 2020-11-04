import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { ProjectModule } from '../project/project.module';


@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    ProjectModule
  ],
  exports: [ResultComponent]
})
export class SearchModule { }
