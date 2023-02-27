import { Component, OnInit } from '@angular/core';
import { SideMenuItems } from '../../classes/side-menu-items';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  sideMenuItems = SideMenuItems;

  constructor() {}

  ngOnInit(): void {}
}
