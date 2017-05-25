import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-view-task',
  templateUrl: 'view-task.html',
})
export class ViewTaskPage {
  title;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('task').title;
  }

}
