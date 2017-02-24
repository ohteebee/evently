import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { mockDb } from '../../app/data-store';
import { EventsCreatePage } from '../events/create/events-create';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  constructor(public navCtrl: NavController) {
    this.user = mockDb.registrants.vito_key.name;
  }

  createEvent() {
    this.navCtrl.push(EventsCreatePage)
  }

  dashboard() {
    this.navCtrl.push(DashboardPage)
  }
}
