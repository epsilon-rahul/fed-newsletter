import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/project/project.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  message;
  list;
  constructor(private route: ActivatedRoute, public searchService: SearchService, public projectService: ProjectService) { }

  ngOnInit() {
    this.searchService.currentMessage.subscribe(
      (message) => { console.log(message); this.message = message }, (err) => { console.log(err) })
  }

}
