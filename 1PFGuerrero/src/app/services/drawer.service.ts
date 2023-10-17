import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private _drawerOpen = new BehaviorSubject<boolean>(false);
  drawerOpen$ = this._drawerOpen.asObservable();

  toggleDrawer() {
    this._drawerOpen.next(!this._drawerOpen.value);
  }

  constructor() { }
}
