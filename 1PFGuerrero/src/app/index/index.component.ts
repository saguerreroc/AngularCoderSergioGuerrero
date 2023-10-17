import { Component , ViewChild } from '@angular/core';
import { DrawerService } from '../services/drawer.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  @ViewChild('drawer') drawer!: MatDrawer;
  
  constructor(private drawerService: DrawerService) {}

  ngOnInit() {
    this.drawerService.drawerOpen$.subscribe(() => {
      this.drawer.toggle();
    });
  }

}
