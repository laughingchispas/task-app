import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';

import { Data } from '../../providers/data/data';

import { ViewTaskPage } from '../view-task/view-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tasks =[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.dataService.getData().then((taskdata) => {

      if(taskdata){
        this.tasks = JSON.parse(taskdata);
      }

    });
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
    this.dataService.save(this.tasks);
  }

  viewTask(task){
    this.navCtrl.push(ViewTaskPage, {
      task: task
    });
  }


}
