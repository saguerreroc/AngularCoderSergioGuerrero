import { Component , ViewChild } from '@angular/core';
import { DrawerService } from '../services/drawer.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild('drawer') drawer!: MatDrawer;
  
  constructor(private drawerService: DrawerService) {}

  ngOnInit() {
    this.drawerService.drawerOpen$.subscribe(() => {
      this.drawer.toggle();
    });
  }
}
