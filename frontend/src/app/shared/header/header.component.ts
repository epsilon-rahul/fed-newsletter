import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";
import { SearchService } from 'src/app/search/search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm;

  constructor(public authSerive: AuthService, public router: Router, public fb: FormBuilder, private searchService: SearchService) {
    this.searchForm = this.fb.group({
      searchText: ['']
    })
  }

  ngOnInit() {
  }

  signOut() {
    this.authSerive.logout();
  }

  onSubmit() {
    this.router.navigate(['search'], {
      queryParams: {
        search: this.searchForm.value.searchText,
      }
    });
    this.searchService.changeMessage(this.searchForm.value.searchText)
  }
}
