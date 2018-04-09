import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UpdateStatusPage } from '../update-status/update-status';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myStatus:string;
  constructor(public navCtrl: NavController, public storage: Storage) {

  }
  openUpdateStatusPage(){
   this.navCtrl.push(UpdateStatusPage);   
  }
  ionViewWillEnter(){
    this.storage.get("Status")
    .then((data)=>{
      this.myStatus = data;
    })
    .catch((err) =>{
      console.log("Database error")
    })
  }
}
