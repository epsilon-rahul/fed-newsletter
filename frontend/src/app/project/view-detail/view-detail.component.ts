import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  detail;

  constructor(public projectService: ProjectService, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.projectService.list("?_id=" + this.route.snapshot.params.id).subscribe(
      (resp) => {
        this.detail = resp[0];
        console.log(this.detail);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
