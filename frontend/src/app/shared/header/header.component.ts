import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";
import { SearchService } from 'src/app/search/search.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  passwordDialog: boolean;
  passwordErrorMsg;
  password: string;
  confirmPassword: string;
  passwordSubmitted: boolean;
  searchForm;
  isAdmin:any=false;
  constructor(
    public authSerive: AuthService,
    public router: Router,
    public fb: FormBuilder,
    private messageService: MessageService,
    private searchService: SearchService
  ) {
    this.searchForm = this.fb.group({
      searchText: ['']
    })
    this.isAdmin = this.authSerive.isLoggednIn() && this.authSerive.getRole() === 'admin' ? true : false;
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

  /**
   * @description Show Modal
   */
  passwordModal() {
    this.passwordDialog = true;
    this.clearModal();
  }

  /**
   * @description Reset Password
   */
  resetPassword() {
    this.passwordSubmitted = true;
    let validConfPassword = this.confirmPassword && this.confirmPassword === this.password;
    let validPassword = this.password && this.password.length > 5;
    if (validPassword && validConfPassword) {
      console.log("Update Password >>>>>>>>>>>>>>")
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Password updated', life: 3000 });
      this.hideModal();
    }
  }

  /**
   * @description Hide Modal
   */
  hideModal() {
    this.passwordDialog = false;
    this.clearModal();
  }

  /**
  * @description Clear Modal
  */
  clearModal() {
    this.passwordErrorMsg = "";
    this.password = "";
    this.confirmPassword = "";
    this.passwordSubmitted = false;
  }
}
