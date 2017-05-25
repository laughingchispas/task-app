import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tasks;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    this.tasks = [
      {title: 'task one'},
      {title: 'task two'},
      {title: 'task three'},
      {title: 'task four'}
    ];
  }

}
