import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  @Input() lists;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    if (!this.lists) {
      this.projectService.list('').subscribe(
        (resp) => {
          console.log(resp);
          this.lists = resp;
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

}
