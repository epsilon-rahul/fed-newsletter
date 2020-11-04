import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { InterceptorService } from './interceptor.service';


@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, FontAwesomeModule, HttpClientModule, BsDropdownModule.forRoot(), ReactiveFormsModule, RouterModule],
  exports: [SidebarComponent, HeaderComponent, FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,

    }
  ]
})
export class SharedModule { }
