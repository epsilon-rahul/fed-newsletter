import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

@NgModule({
    declarations: [AdminDashboardComponent],
    imports: [CommonModule, ReactiveFormsModule],
})
export class AdminModule {}
