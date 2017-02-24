import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { mockDb } from '../../app/data-store';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  event: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = mockDb.registrants.vito_key.events.event_key;

    // this.event = JSON.stringify(this.event);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  mapDinner(i): string {
    switch(i) {
      case 0: return 'Burgers'
      case 1: return 'Italian'
      case 2: return 'Salad'
      case 3: return 'Eggplat'
      default: return 'Any'
    }
  }
}
