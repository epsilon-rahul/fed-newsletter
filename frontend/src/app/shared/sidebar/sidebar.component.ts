import { Component, OnInit } from '@angular/core';
import { faCoffee, faAngleDoubleDown, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faCoffee = faCoffee;
  faAngleDoubleDown = faAngleDoubleDown;
  faAngleRight = faAngleRight;
  menus = [
    {
      name: "Front-end",
      iconName: faCoffee,
      iconLeft: faAngleRight,
      active: true,
      submenu: [
        {
          name: "Option 1",
        },
        {
          name: "Option 2",
        },
        {
          name: "Option 3",
        }
      ]
    },
    {
      name: "Dashboard",
      iconName: faCoffee,
      active: false,
      iconLeft: '',
    },
    {
      name: "Sample ",
      iconName: faCoffee,
      iconLeft: faAngleRight,
      active: false,
      submenu: [
        {
          name: "Option 1",
        },
        {
          name: "Option 2",
        },
        {
          name: "Option 3",
        }
      ]
    },
    {
      name: "New Sample",
      iconName: faCoffee,
      active: false,
      iconLeft: '',
    }
  ]

  constructor(public authSerive: AuthService) { }

  ngOnInit() {
  }

  toggle(index: number) {
    this.menus.filter((menu, i) => i !== index && menu.active).forEach(menu => menu.active = !menu.active);
    this.menus[index].active = !this.menus[index].active;
  }


}
