import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UpdateStatusPage } from '../update-status/update-status';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage) {

  }
  openUpdateStatusPage(){
   this.navCtrl.push(UpdateStatusPage);   
  }

}
