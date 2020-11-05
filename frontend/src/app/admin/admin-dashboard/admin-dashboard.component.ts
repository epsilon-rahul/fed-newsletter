import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { MustMatch } from "../../shared/_helpers/custom-validator";
import { User } from '../user';
import { UserServiceService } from "../user-service.service";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})

export class AdminDashboardComponent implements OnInit {
  showGrid: boolean;
  userDialog: boolean;
  userList: User[];
  user: User;
  selectedUsers: User[];
  submitted: boolean;
  confirmPassword: string;

  addUser: FormGroup;
  successMssg;
  errorMsg;
  

  constructor(
    private fb: FormBuilder,
    public userService: UserServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  // userForm = new FormGroup({
  //   userName: new FormControl('',[
  //     Validators.required,
  //     Validators.minLength(5)
  //   ]),
  //   userEmail: new FormControl('',[
  //     Validators.required,
  //     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  //   ]),
  //   userPassword: new FormControl('',[
  //     Validators.required,
  //     Validators.minLength(5)
  //   ]),
  //   userConfirmPassword: new FormControl('',[
  //     Validators.required,
  //   ]),
  //   type: new FormControl('',[
  //     Validators.required
  //   ]),
  // });

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (resp) => {
        this.userList = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

   /**
   * @description Modal Add User
   */
  openNew() {
    this.user = {};
    this.errorMsg = "";
    this.confirmPassword = "";
    this.submitted = false;
    this.userDialog = true;
  }

  /**
   * @description Modal Edit User
   */
  editUser(user: User) {
    this.user = { ...user };
    this.errorMsg = "";
    this.confirmPassword = this.user.password;
    this.submitted = false;
    this.userDialog = true;
  }

  /**
   * @description Modal Hide
   */
  hideDialog() {
    this.errorMsg = "";
    this.confirmPassword = "";
    this.submitted = false;
    this.userDialog = false;
  }

  /**
   * @description Delete user
   */
  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteUser(user._id).subscribe(
          (resp) => {
            console.log(resp);
            this.userList = this.userList.filter(val => val._id !== user._id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User deleted', life: 3000 });
          },
          (err) => {
            console.log(err);
          }
        )

        this.user = {};
      }
    });
  }

  /**
   * @description Update user
   */
  updateUser() {
    this.submitted = true;
    let validName = this.user.name && this.user.name.length > 5;
    let validEmail = this.user.email;
    let validPassword = this.user.password && this.user.password.length > 5;
    let validConfirmPassword = this.confirmPassword && this.confirmPassword ===  this.user.password;
    let validType = this.user.type
    if (validName && validEmail && validPassword && validType && validConfirmPassword) {
      let userID = this.user._id;
      if (userID) {
        this.userList[this.findIndexById(userID)] = this.user;
        this.userService.updateUser(userID, this.user).subscribe(
          (resp) => {
            console.log(resp);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User details updated', life: 3000 });
            this.userList = [...this.userList];
            this.userDialog = false;
            this.user = {};
            this.errorMsg = "";
          },
          (err) => {
            console.log(err)
            this.errorMsg = err;
          }
        )
      }
      else {
        this.userService.addUser(this.user).subscribe(
          (resp) => {
            console.log(resp);
            this.userList.push(this.user);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000 });
            this.errorMsg = "";
            this.userList = [...this.userList];
            this.userDialog = false;
            this.user = {};
          },
          (err) => {
            console.log(err);
            this.errorMsg = err;
          }
        );
      }
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i]._id === _id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
