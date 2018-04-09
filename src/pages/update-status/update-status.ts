import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-update-status',
  templateUrl: 'update-status.html',
})
export class UpdateStatusPage {
  myStatus:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateStatusPage');
  }
  saveUpdate(){
    console.log(this.myStatus);
    this.storage.set("Status", this.myStatus);
    this.navCtrl.pop();
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
