import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';

/**
 * Generated class for the NewTaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {
  title;

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  ionViewDidLoad() {
  }


  saveTask(){
    let newTask = {
      title: this.title
    };
    this.view.dismiss(newTask);
  }

  close(){
    this.view.dismiss();
  }

}
