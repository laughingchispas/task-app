import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the NewSubTaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-sub-task',
  templateUrl: 'new-sub-task.html',
})
export class NewSubTaskPage {

  item_title;

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  ionViewDidLoad() {

  }

  saveItem(){
    let newItem = {
      item_title: this.item_title
    };
    this.view.dismiss(newItem);
  }

  close(){
    this.view.dismiss();
  }

}
