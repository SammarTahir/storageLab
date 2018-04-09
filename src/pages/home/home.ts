import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UpdateStatusPage } from '../update-status/update-status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openUpdateStatusPage(){
   this.navCtrl.push(UpdateStatusPage);   
  }

}
