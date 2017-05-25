import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController  } from 'ionic-angular';
import { NewSubTaskPage } from '../new-sub-task/new-sub-task';


@Component({
  selector: 'page-view-task',
  templateUrl: 'view-task.html',
})
export class ViewTaskPage {

  title;
  item_title;
  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public modalCtrl: ModalController) {
  }


  ionViewDidLoad() {
    this.title = this.navParams.get('task').title;
  }

  addItem(){
    let addModal = this.modalCtrl.create(NewSubTaskPage)
    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    });
    addModal.present();

  }

  saveItem(item){
    this.items.push(item);
  }

  viewItem(item){
    this.navCtrl.push(ViewTaskPage, {
      item: item
    });
  }

}
