import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';

import { ViewTaskPage } from '../view-task/view-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tasks =[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad(){
  }

  addTask(){
    let addModal = this.modalCtrl.create(NewTaskPage);
    addModal.onDidDismiss((task) => {
      if(task){
        this.saveTask(task);
      }
    });

    addModal.present();

  }

  saveTask(task){
    this.tasks.push(task);
  }

  viewTask(task){
    this.navCtrl.push(ViewTaskPage, {
      task: task
    });
  }


}
